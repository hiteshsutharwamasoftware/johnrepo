// Node built-in test ensuring homepage includes a textbox input
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'

test('homepage has a prominent textbox', () => {
  const source = readFileSync('src/App.tsx', 'utf8')
  assert.match(
    source,
    /<input[\s\S]*?type=\"text\"[\s\S]*?>/i,
    'Expected an <input type="text"> on the homepage'
  )
})

test('textbox accepts and displays input (state binding present)', () => {
  const source = readFileSync('src/App.tsx', 'utf8')
  // Heuristic: input has value bound to state and onChange handler
  assert.match(source, /value=\{\w+\}/, 'Input should bind `value` to state')
  assert.match(source, /onChange=\{/i, 'Input should handle onChange to accept typing')
})

test('submitting provides feedback to the user', () => {
  const source = readFileSync('src/App.tsx', 'utf8')
  // Heuristic: after submit, a status paragraph reflecting the submission exists
  assert.match(source, /onSubmit=\{/, 'Form should handle onSubmit')
  assert.match(source, /role=\"status\"/, 'Should render feedback with role="status"')
  assert.match(source, /You entered:\s*<strong>\{submitted\}<\/strong>/, 'Displays submitted text back to user')
})
