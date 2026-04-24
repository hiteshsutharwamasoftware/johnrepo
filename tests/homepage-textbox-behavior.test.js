// Static source checks for homepage textbox behavior using Node's built-in test runner.
// This avoids adding DOM/test libs while guarding key UX contracts.
import test from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'

const source = readFileSync('src/App.tsx', 'utf8')

test('textbox has controlled value and onChange', () => {
  assert.match(source, /<input[\s\S]*?type="text"[\s\S]*?>/i)
  assert.match(source, /value=\{\s*query\s*\}/, 'Input should be controlled by  state')
  assert.match(
    source,
    /onChange=\{\(e\)\s*=>\s*setQuery\(e\.target\.value\)\}\s*/,
    'Input should update  via onChange'
  )
})

test('form submit prevents default and sets submitted with trimmed value', () => {
  assert.match(source, /<form[\s\S]*?onSubmit=\{\(e\)\s*=>\s*\{[\s\S]*?e\.preventDefault\(\)/, 'Form should prevent default on submit')
  assert.match(source, /const\s+v\s*=\s*query\.trim\(\)/, 'Submit should trim the input value')
  assert.match(source, /if\s*\(v\)\s*setSubmitted\(v\)/, 'Non-empty trimmed input should call setSubmitted')
  assert.match(source, /<button[^>]*type="submit"/, 'A submit button should be present')
})

test('feedback region announces submitted value', () => {
  assert.match(source, /role="status"/, 'Feedback region should have role=status')
  assert.match(source, /You entered:/, 'Feedback text should indicate the entered value')
})
