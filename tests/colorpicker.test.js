// Updated tests: homepage should NOT include a color picker
import test from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'

const srcPath = 'src/App.tsx'

test('No color picker is present on the homepage', () => {
  const source = readFileSync(srcPath, 'utf8')
  assert.doesNotMatch(source, /<input[\s\S]*?type="color"[\s\S]*?>/i)
})
