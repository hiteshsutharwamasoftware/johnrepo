// Minimal homepage tests: only 'Welcome' is present
import test from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'

const srcPath = 'src/App.tsx'

test('Homepage displays only a Welcome message', () => {
  const source = readFileSync(srcPath, 'utf8')
  // Must contain a prominent Welcome heading
  assert.match(source, /<h1>\s*Welcome\s*<\/h1>/i)
  // Must not contain inputs, buttons, forms, or color pickers
  assert.doesNotMatch(source, /<input|<button|<form|type="color"/i)
})
