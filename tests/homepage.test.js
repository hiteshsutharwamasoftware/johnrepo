// Node built-in tests validating minimal Welcome-only homepage (static assertions)
import test from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'

const srcPath = 'src/App.tsx'

test("Given I visit the homepage, I see only 'Welcome'", () => {
  const source = readFileSync(srcPath, 'utf8')
  assert.match(source, /<h1>\s*Welcome\s*<\/h1>/i, "Expected an <h1> with 'Welcome'")
})

test('Given the homepage, there are no other UI elements', () => {
  const source = readFileSync(srcPath, 'utf8')
  // Ensure no input, button, form, or color picker remnants exist
  assert.doesNotMatch(source, /<input|<button|<form|color-picker|color-preview/i)
})
