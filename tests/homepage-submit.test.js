import test from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'

const src = readFileSync('src/App.tsx', 'utf8')

// Ensure textbox input exists
test('homepage has a textbox <input type=text>', () => {
  assert.match(src, /<input[\s\S]*?type="text"[\s\S]*?>/i)
})

// Ensure submit button exists
test('homepage has a submit button', () => {
  assert.match(src, /<button[\s\S]*?type="submit"[\s\S]*?>/i)
})

// Ensure submission feedback pattern is present
test('submission feedback text and accessibility hooks', () => {
  assert.match(src, /setSubmitted\(/)
  assert.match(src, /You entered:/)
  assert.match(src, /role="status"|aria-live="polite"/i)
})
