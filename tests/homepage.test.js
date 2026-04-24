// Node built-in tests for homepage textbox behavior
import test from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'

const src = () => readFileSync('src/App.tsx', 'utf8')

// AC1: textbox present prominently
test('homepage has a prominent textbox', () => {
  const source = src()
  assert.match(
    source,
    /<input[\n\r\t\s\S]*?type="text"[\n\r\t\s\S]*?>/i,
    'Expected an <input type=text> on the homepage'
  )
  assert.match(
    source,
    /id="homepage-input"[\n\r\t\s\S]*?placeholder="Type here\.\.\."/i,
    'Textbox should have id and placeholder for accessibility'
  )
})

// AC2: accepts input (controlled input with onChange)
test('textbox accepts input via controlled onChange', () => {
  const source = src()
  assert.match(
    source,
    /value=\{query\}[\n\r\t\s\S]*onChange=\{\(e\) => setQuery\(e\.target\.value\)\}/,
    'Textbox should be controlled with value and onChange'
  )
})

// AC3: submit processes input and shows feedback
test('submitting processes input and provides feedback', () => {
  const source = src()
  // preventDefault and setSubmitted with trimmed value
  assert.match(
    source,
    /onSubmit=\{\(e\) => \{[\n\r\t\s\S]*e\.preventDefault\(\);?[\n\r\t\s\S]*const v = query\.trim\(\)[\n\r\t\s\S]*if \(v\) setSubmitted\(v\)/,
    'Form should prevent default and set submitted value when non-empty'
  )
  // Accessible feedback region
  assert.match(
    source,
    /<p className="submitted" role="status" aria-live="polite">[\n\r\t\s\S]*You entered:/,
    'Expected an accessible feedback region after submit'
  )
})
