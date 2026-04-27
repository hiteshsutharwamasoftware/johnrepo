import test from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'

const srcPath = 'src/App.tsx'

test('Homepage shows Welcome and an accessible textbox', () => {
  const source = readFileSync(srcPath, 'utf8')
  assert.match(source, /<h1>\s*Welcome\s*<\/h1>/i, 'Expected <h1>Welcome</h1> on the homepage')
  assert.match(source, /<input[^>]*type="text"/i, 'Expected a text input on the homepage')
  assert.match(source, /aria-label="Homepage Textbox"/i, 'Textbox should have an accessible label')
})
