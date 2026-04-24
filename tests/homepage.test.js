// Node built-in tests to validate homepage textbox
import test from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'

const readApp = () => readFileSync('src/App.tsx', 'utf8')

// 1) Presence
test('homepage has a prominent textbox', () => {
  const source = readApp()
  assert.match(
    source,
    /<input[\s\S]*?type="text"[\s\S]*?>/i,
    'Expected an <input type=text> on the homepage'
  )
})

// 2) Input acceptance (static heuristic)
// Ensure input is controlled and accepts changes
test('textbox is controlled via value/onChange', () => {
  const source = readApp()
  assert.match(source, /value=\{[a-zA-Z_$][\w$]*\}/, 'Expected a controlled input with value')
  assert.match(
    source,
    /onChange=\{\(e\) => [^}]+\}/,
    'Expected input to handle onChange events'
  )
})

// 3) Submission feedback (static heuristic)
// Ensure UI provides feedback after submit
test('submission feedback is rendered after submit', () => {
  const source = readApp()
  assert.match(
    source,
    /role="status"[\s\S]*You entered:/,
    'Expected a status region that shows submitted text'
  )
})
