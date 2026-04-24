// Node built-in tests ensuring homepage textbox presence and basic behavior
import test from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'

const source = readFileSync('src/App.tsx', 'utf8')

// Acceptance: textbox is visible on the homepage
test('homepage has a prominent textbox', () => {
  assert.match(
    source,
    /<input[\s\S]*?type="text"[\s\S]*?>/i,
    'Expected an <input type=text> on the homepage'
  )
})

// Acceptance: textbox accepts input (controlled input + onChange)
test('textbox is controlled and updates on input', () => {
  assert.match(
    source,
    /value=\{\s*query\s*\}/,
    'Expected input to be controlled via value={query}'
  )
  assert.match(
    source,
    /onChange=\{\s*\(e\)\s*=>\s*setQuery\(e\.target\.value\)\s*\}/,
    'Expected onChange to update query state with typed text'
  )
})

// Acceptance: submitting processes trimmed value and provides feedback
test('submit trims, prevents default, and sets submitted value', () => {
  assert.match(
    source,
    /onSubmit=\{\s*\(e\)\s*=>\s*\{[\s\S]*?preventDefault\(\)[\s\S]*?const\s+v\s*=\s*query\.trim\(\)[\s\S]*?if\s*\(v\)\s*setSubmitted\(v\)/,
    'Expected preventDefault, trim, and setSubmitted(v) in onSubmit handler'
  )
})

// Acceptance: submit button exists and feedback markup present
test('submit button and feedback markup are present', () => {
  assert.match(
    source,
    /<button[\s\S]*?type="submit"[\s\S]*?>/i,
    'Expected a submit button'
  )
  assert.match(
    source,
    /You entered:\s*<strong>\{submitted\}<\/strong>/,
    'Expected feedback text that echoes submitted value'
  )
})
