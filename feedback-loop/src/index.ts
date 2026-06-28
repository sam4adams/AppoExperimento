/**
 * Custom AI Feedback Loop with Token-Aware Context Compression
 *
 * Two feedback loops working together:
 *
 *  Loop 1 — Quality feedback:
 *    User rates each response 1–5. High-rated (4+) Q&A pairs are saved to
 *    feedback-memory.md and injected as few-shot examples in future prompts.
 *    The model mirrors the style/depth of answers you liked.
 *
 *  Loop 2 — Token pressure feedback:
 *    Running token usage is tracked across the conversation. When it crosses
 *    TOKEN_THRESHOLD, the full history is compressed into a summary that
 *    preserves key context — biased toward topics the user rated highly.
 *    Conversation continues without hitting the context limit.
 */

import Anthropic from '@anthropic-ai/sdk'
import * as readline from 'readline'
import { saveEntry, getTopExamples, summarizeMemory } from './memory.js'
import { Conversation } from './conversation.js'

const client = new Anthropic()  // reads ANTHROPIC_API_KEY from env
const conversation = new Conversation()

const rl = readline.createInterface({ input: process.stdin, output: process.stdout })
const ask = (prompt: string): Promise<string> =>
  new Promise(resolve => rl.question(prompt, resolve))

function buildSystemPrompt(): string {
  const examples = getTopExamples(5)
  let system = `You are a helpful assistant. Be concise and clear.`
  if (examples.length > 0) {
    system += `\n\nThe user has previously rated these responses highly — mirror their style and depth:\n`
    examples.forEach((ex, i) => {
      system += `\n--- Example ${i + 1} (rated ${ex.rating}/5) ---`
      system += `\nUser: ${ex.userMessage}`
      system += `\nAssistant: ${ex.assistantResponse}`
    })
    system += `\n\nMatch the tone, depth, and format of those highly-rated responses.`
  }
  return system
}

async function chat(userMessage: string): Promise<string> {
  conversation.addUser(userMessage)

  const response = await client.messages.create({
    model: 'claude-haiku-4-5-20251001',
    max_tokens: 1024,
    system: buildSystemPrompt(),
    messages: conversation.history,
  })

  const block = response.content[0]
  const text = block.type === 'text' ? block.text : ''
  conversation.addAssistant(text, response.usage)
  return text
}

async function main() {
  console.log('\n╔════════════════════════════════════════════╗')
  console.log('║   AI Feedback Loop + Context Compression   ║')
  console.log('╚════════════════════════════════════════════╝')
  console.log('Ask anything. Rate responses 1–5 to train future answers.')
  console.log('Context auto-compresses when token usage gets high.')
  console.log('Type "stats" for memory summary. Type "exit" to quit.\n')
  console.log(`Memory: ${summarizeMemory()}\n`)

  while (true) {
    const userMessage = (await ask('You: ')).trim()
    if (!userMessage) continue
    if (userMessage.toLowerCase() === 'exit') break
    if (userMessage.toLowerCase() === 'stats') {
      console.log(`\nMemory:  ${summarizeMemory()}`)
      console.log(`Tokens:  ${conversation.tokenCount} used | compressions: ${conversation.compressionsDone}\n`)
      continue
    }

    // Check token pressure BEFORE sending — compress if needed
    if (conversation.shouldCompress()) {
      console.log('\n⟳ Token threshold reached — compressing conversation history…')
      const summary = await conversation.compress(client)
      console.log(`  Summary: ${summary.slice(0, 120)}…`)
      console.log(`  Tokens reset to ~${conversation.tokenCount}\n`)
    }

    console.log('\nThinking…')
    const response = await chat(userMessage)
    console.log(`\nAssistant: ${response}`)
    console.log(`\n[tokens used this session: ${conversation.tokenCount}]`)

    const ratingStr = (await ask('Rate this response (1–5, or Enter to skip): ')).trim()
    if (ratingStr) {
      const rating = parseInt(ratingStr, 10)
      if (rating >= 1 && rating <= 5) {
        saveEntry({
          userMessage,
          assistantResponse: response,
          rating,
          timestamp: new Date().toISOString(),
        })
        const msg = rating >= 4
          ? '✓ Saved to feedback-memory.md — will shape future responses.'
          : '✓ Noted. Low-rated responses are tracked but not used as examples.'
        console.log(msg)
      }
    }
    console.log()
  }

  console.log('\nGoodbye! Feedback saved to feedback-memory.md')
  rl.close()
}

main().catch(err => { console.error(err); process.exit(1) })
