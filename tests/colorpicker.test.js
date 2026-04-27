// Updated tests verifying absence of color picker to satisfy minimal homepage
import test from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'

const srcPath = 'src/App.tsx'

test('No color picker is displayed on the homepage', () => {
  const source = readFileSync(srcPath, 'utf8')
  assert.doesNotMatch(
    source,
    /<input[\s\S]*?type="color"[\s\S]*?>/i,
    'Did not expect an <input type=color> on the homepage'
  )
})

test('No color preview or value text present', () => {
  const source = readFileSync(srcPath, 'utf8')
  assert.doesNotMatch(source, /className="color-preview"/i)
  assert.doesNotMatch(source, /className="color-value"/i)
})
