// Node built-in test ensuring homepage includes a textbox input
import test from 'node:test'
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

