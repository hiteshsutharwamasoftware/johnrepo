// Node built-in tests for homepage textbox behavior
import test from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'

const src = readFileSync('src/App.tsx', 'utf8')

test('textbox accepts input (controlled)', () => {
  assert.match(
    src,
    /<input[\s\S]*?type="text"[\s\S]*?value=\{query\}[\s\S]*?onChange=\{\(e\) => setQuery\(e.target.value\)\}/i,
    'Expected controlled <input type="text"> with value and onChange'
  )
})

test('textbox submission available', () => {
  // Verify submit handler on the form and a submit button
  assert.match(src, /<form[\s\S]*?onSubmit=\{\(e\) => \{[\s\S]*?setSubmitted\(v\)[\s\S]*?\}\}/i, 'Expected onSubmit to process input')
  assert.match(src, /<button[\s\S]*?type="submit"[\s\S]*?>/i, 'Expected a submit button')
})

test('feedback region present after submit', () => {
  assert.match(src, /role="status"[\s\S]*You entered:/i, 'Expected a polite status region with submitted text')
})
