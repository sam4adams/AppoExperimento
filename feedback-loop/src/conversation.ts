/**
 * Tracks multi-turn conversation history and running token usage.
 * When tokens approach the context limit, compresses the history by
 * asking Claude to summarize it — preserving highly-rated exchanges.
 */

import Anthropic from '@anthropic-ai/sdk'
import { getTopExamples } from './memory.js'

export type Message = { role: 'user' | 'assistant'; content: string }

// claude-haiku-4-5 context window is 200k tokens; we compress well before that.
// Set lower for a visible demo — raise for production use.
const TOKEN_THRESHOLD = 6000

export class Conversation {
  private messages: Message[] = []
  private totalTokens = 0
  private compressionCount = 0

  get tokenCount() { return this.totalTokens }
  get compressionsDone() { return this.compressionCount }
  get history(): Message[] { return [...this.messages] }

  addUser(content: string) {
    this.messages.push({ role: 'user', content })
  }

  addAssistant(content: string, usage: { input_tokens: number; output_tokens: number }) {
    this.messages.push({ role: 'assistant', content })
    this.totalTokens += usage.input_tokens + usage.output_tokens
  }

  shouldCompress(): boolean {
    return this.totalTokens >= TOKEN_THRESHOLD
  }

  async compress(client: Anthropic): Promise<string> {
    // Build a compression prompt that biases toward preserving highly-rated topics
    const topExamples = getTopExamples(3)
    const preferenceHint = topExamples.length > 0
      ? `The user has rated responses highly when they covered: ${topExamples.map(e => `"${e.userMessage.slice(0, 60)}"`).join(', ')}. Preserve those topics with extra detail.`
      : ''

    const transcript = this.messages
      .map(m => `${m.role === 'user' ? 'User' : 'Assistant'}: ${m.content}`)
      .join('\n\n')

    const summaryResponse = await client.messages.create({
      model: 'claude-haiku-4-5-20251001',
      max_tokens: 1024,
      system: `You are a conversation summarizer. Produce a compact summary that preserves all key facts, decisions, and context so the conversation can continue seamlessly. ${preferenceHint}`,
      messages: [{
        role: 'user',
        content: `Summarize this conversation into a concise memory block:\n\n${transcript}`,
      }],
    })

    const block = summaryResponse.content[0]
    const summary = block.type === 'text' ? block.text : ''

    // Replace full history with a single synthetic assistant message containing the summary
    this.messages = [{
      role: 'assistant',
      content: `[Conversation compressed — summary of prior context]\n\n${summary}`,
    }]
    this.totalTokens = summaryResponse.usage.input_tokens + summaryResponse.usage.output_tokens
    this.compressionCount++

    return summary
  }
}
