# AppoExperimento

Monorepo with two experiments:

## `coin-app/`
React PWA for looking up coin values by country, denomination, and series.
Installable on iPad via Safari "Add to Home Screen."

```bash
cd coin-app && npm install && npm run dev
```

## `feedback-loop/`
Custom AI feedback loop demo using the Claude API.

Ask questions, rate responses 1–5. High-rated answers are stored and fed back
as few-shot examples in future prompts — the model adapts to your preferences
without retraining.

```bash
cd feedback-loop && npm install
ANTHROPIC_API_KEY=your_key npm start
```
