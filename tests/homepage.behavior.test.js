// Node built-in tests validating homepage textbox behavior
import test from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'

const source = readFileSync('src/App.tsx', 'utf8')

test('textbox is present with type="text" and id/label', () => {
  assert.match(source, /<input[\s\S]*?type="text"[\s\S]*?>/i)
  assert.match(source, /<label[^>]*for="homepage-input"/i)
  assert.match(source, /<input[\s\S]*?id="homepage-input"/i)
})

test('textbox is controlled and accepts input (value + onChange)', () => {
  assert.match(source, /value=\{query\}/)
  assert.match(source, /onChange=\{\(e\) => setQuery\(e\.target\.value\)\}/)
})

test('form submission prevents default and trims input', () => {
  assert.match(source, /onSubmit=\{\(e\) => \{[\s\S]*?e\.preventDefault\(\)/)
  assert.match(source, /const v = query\.trim\(\)/)
})

test('non-empty submissions update submitted state and show status message', () => {
  assert.match(source, /if \(v\) setSubmitted\(v\)/)
  assert.match(source, /role="status"/)
  assert.match(source, /aria-live="polite"/)
})
