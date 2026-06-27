import { readFileSync, writeFileSync, existsSync } from 'fs'

export interface FeedbackEntry {
  userMessage: string
  assistantResponse: string
  rating: number      // 1–5
  topic?: string
  timestamp: string
}

export interface Memory {
  entries: FeedbackEntry[]
}

const MEMORY_FILE = new URL('../feedback-memory.json', import.meta.url).pathname

export function loadMemory(): Memory {
  if (!existsSync(MEMORY_FILE)) return { entries: [] }
  return JSON.parse(readFileSync(MEMORY_FILE, 'utf-8')) as Memory
}

export function saveEntry(entry: FeedbackEntry): void {
  const mem = loadMemory()
  mem.entries.push(entry)
  writeFileSync(MEMORY_FILE, JSON.stringify(mem, null, 2))
}

// Return only highly-rated examples (4+) as few-shot context, most recent first, capped at N
export function getTopExamples(n = 5): FeedbackEntry[] {
  const mem = loadMemory()
  return mem.entries
    .filter(e => e.rating >= 4)
    .sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime())
    .slice(0, n)
}

export function summarizeMemory(): string {
  const mem = loadMemory()
  const total = mem.entries.length
  if (total === 0) return 'No feedback collected yet.'
  const avg = mem.entries.reduce((s, e) => s + e.rating, 0) / total
  const good = mem.entries.filter(e => e.rating >= 4).length
  return `${total} responses rated | avg ${avg.toFixed(1)}/5 | ${good} high-quality examples stored`
}
