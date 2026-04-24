// Static analysis tests for homepage textbox behavior
import test from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'

const src = readFileSync('src/App.tsx', 'utf8')

test('textbox has id and aria-label', () => {
  assert.match(
    src,
    /<input[\s\S]*id="homepage-input"[\s\S]*>/i,
    'Expected input to have id=homepage-input'
  )
  assert.match(
    src,
    /<input[\s\S]*aria-label="Homepage input"[\s\S]*>/i,
    'Expected input to have aria-label for accessibility'
  )
})

test('label present and associated via htmlFor', () => {
  assert.match(
    src,
    /<label[\s\S]*htmlFor="homepage-input"[\s\S]*>\s*Enter text\s*<\/label>/i,
    'Expected an accessible label linked to the input'
  )
})
