// Node built-in tests validating minimal homepage (only 'Welcome')
import test from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'

const srcPath = 'src/App.tsx'

test("Homepage shows only a 'Welcome' message", () => {
  const source = readFileSync(srcPath, 'utf8')
  assert.match(source, /<h1>\s*Welcome\s*<\/h1>/i, "Expected a single prominent 'Welcome' heading")
})

test('No other UI elements are present', () => {
  const source = readFileSync(srcPath, 'utf8')
  assert.doesNotMatch(source, /<input\b/i, 'Did not expect any input fields')
  assert.doesNotMatch(source, /<form\b/i, 'Did not expect any forms')
  assert.doesNotMatch(source, /<button\b/i, 'Did not expect any buttons')
})
