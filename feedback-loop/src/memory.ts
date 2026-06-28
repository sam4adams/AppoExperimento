import { readFileSync, writeFileSync, existsSync, appendFileSync } from 'fs'

export interface FeedbackEntry {
  userMessage: string
  assistantResponse: string
  rating: number      // 1–5
  timestamp: string
}

const MEMORY_FILE = new URL('../feedback-memory.md', import.meta.url).pathname

const ENTRY_PATTERN =
  /## Entry — (.+?) \| Rating: (\d)\/5\n\n\*\*User:\*\* ([\s\S]+?)\n\n\*\*Assistant:\*\* ([\s\S]+?)\n\n---/g

export function loadMemory(): FeedbackEntry[] {
  if (!existsSync(MEMORY_FILE)) return []
  const raw = readFileSync(MEMORY_FILE, 'utf-8')
  const entries: FeedbackEntry[] = []
  let match: RegExpExecArray | null
  while ((match = ENTRY_PATTERN.exec(raw)) !== null) {
    entries.push({
      timestamp: match[1],
      rating: parseInt(match[2], 10),
      userMessage: match[3].trim(),
      assistantResponse: match[4].trim(),
    })
  }
  return entries
}

export function saveEntry(entry: FeedbackEntry): void {
  const block = [
    `## Entry — ${entry.timestamp} | Rating: ${entry.rating}/5`,
    '',
    `**User:** ${entry.userMessage}`,
    '',
    `**Assistant:** ${entry.assistantResponse}`,
    '',
    '---',
    '',
  ].join('\n')

  if (!existsSync(MEMORY_FILE)) {
    writeFileSync(MEMORY_FILE, `# Feedback Memory\n\n`)
  }
  appendFileSync(MEMORY_FILE, block)
}

// Return only highly-rated examples (4+), most recent first, capped at N
export function getTopExamples(n = 5): FeedbackEntry[] {
  return loadMemory()
    .filter(e => e.rating >= 4)
    .sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime())
    .slice(0, n)
}

export function summarizeMemory(): string {
  const entries = loadMemory()
  if (entries.length === 0) return 'No feedback collected yet.'
  const avg = entries.reduce((s, e) => s + e.rating, 0) / entries.length
  const good = entries.filter(e => e.rating >= 4).length
  return `${entries.length} responses rated | avg ${avg.toFixed(1)}/5 | ${good} high-quality examples in feedback-memory.md`
}
