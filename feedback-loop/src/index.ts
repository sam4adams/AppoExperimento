/**
 * Custom AI Feedback Loop
 *
 * How it works:
 *  1. User asks a question
 *  2. Claude answers — but first, its system prompt is enriched with
 *     highly-rated (4–5 star) past Q&A examples from feedback-memory.json
 *  3. User rates the response 1–5
 *  4. Rating + exchange are stored; 4+ examples feed future prompts
 *
 * This is "in-context learning via human feedback" — the model doesn't
 * retrain, but it sees what kinds of answers you liked and mirrors them.
 */

import Anthropic from '@anthropic-ai/sdk'
import * as readline from 'readline'
import { saveEntry, getTopExamples, summarizeMemory } from './memory.js'

const client = new Anthropic()  // reads ANTHROPIC_API_KEY from env

const rl = readline.createInterface({ input: process.stdin, output: process.stdout })
const ask = (prompt: string): Promise<string> =>
  new Promise(resolve => rl.question(prompt, resolve))

function buildSystemPrompt(): string {
  const examples = getTopExamples(5)

  let system = `You are a helpful assistant. Be concise and clear.`

  if (examples.length > 0) {
    system += `\n\nThe user has previously rated these responses highly — use them as style and quality guidance:\n`
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
  const response = await client.messages.create({
    model: 'claude-haiku-4-5-20251001',  // fast + cheap for a demo loop
    max_tokens: 1024,
    system: buildSystemPrompt(),
    messages: [{ role: 'user', content: userMessage }],
  })

  const block = response.content[0]
  return block.type === 'text' ? block.text : ''
}

async function main() {
  console.log('\n╔══════════════════════════════════════╗')
  console.log('║     AI Custom Feedback Loop Demo     ║')
  console.log('╚══════════════════════════════════════╝')
  console.log('Ask anything. Rate each response 1–5.')
  console.log('High-rated answers become few-shot examples for future queries.')
  console.log('Type "stats" to see memory summary. Type "exit" to quit.\n')
  console.log(`Memory: ${summarizeMemory()}\n`)

  while (true) {
    const userMessage = (await ask('You: ')).trim()
    if (!userMessage) continue
    if (userMessage.toLowerCase() === 'exit') break
    if (userMessage.toLowerCase() === 'stats') {
      console.log(`\nMemory: ${summarizeMemory()}\n`)
      continue
    }

    console.log('\nThinking…')
    const response = await chat(userMessage)
    console.log(`\nAssistant: ${response}\n`)

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
          ? '✓ Stored as a high-quality example — will influence future responses.'
          : '✓ Noted. Low-rated responses are tracked but not used as examples.'
        console.log(msg)
      }
    }
    console.log()
  }

  console.log('\nGoodbye! Memory saved to feedback-memory.json')
  rl.close()
}

main().catch(err => { console.error(err); process.exit(1) })
