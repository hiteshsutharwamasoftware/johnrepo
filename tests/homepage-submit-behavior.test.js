// Static analysis tests for submit handling feedback
import test from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'

const src = readFileSync('src/App.tsx', 'utf8')

test('form has onSubmit that prevents default', () => {
  assert.match(
    src,
    /<form[\s\S]*onSubmit=\{\(e\) => \{[\s\S]*?e\.preventDefault\(\)/i,
    'Expected form onSubmit to call e.preventDefault()'
  )
})

test('submit stores value and renders feedback', () => {
  assert.match(
    src,
    /if \(v\) setSubmitted\(v\)/,
    'Expected submit handler to setSubmitted when value exists'
  )
  assert.match(
    src,
    /<p className="submitted" role="status" aria-live="polite">[\s\S]*You entered:/,
    'Expected a polite status message to show submitted text'
  )
})
