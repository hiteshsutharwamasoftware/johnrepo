// Lightweight, dependency-free checks of the homepage textbox
// using Node's built-in test runner. These tests parse the source
// as text to avoid adding runtime/test deps.
import test from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'

const source = readFileSync('src/App.tsx', 'utf8')

test('homepage has a prominent textbox', () => {
  assert.match(
    source,
    /<input[\s\S]*?type=\"text\"[\s\S]*?>/i,
    'Expected an <input type="text"> on the homepage'
  )
  assert.match(
    source,
    /id=\"homepage-input\"/,
    'Textbox should have id="homepage-input" for labeling and hooks'
  )
  assert.match(
    source,
    /placeholder=\"Type here\.{3}\"/,
    'Textbox should have the placeholder "Type here..."'
  )
})

test('textbox is wired to state and accepts input', () => {
  // Accepts input when `value` bound to state and `onChange` updates it.
  assert.match(
    source,
    /const \[query, setQuery\] = useState\(\"\"\)/,
    'Expected a `query` state for the textbox value'
  )
  assert.match(
    source,
    /value=\{query\}/,
    'Textbox `value` should be bound to `query` state'
  )
  assert.match(
    source,
    /onChange=\{\(e\) => setQuery\(e\.target\.value\)\}/,
    'Textbox `onChange` should update state with the typed value'
  )
})

test('form submit behavior trims and announces entered text', () => {
  // Prevent default on submit.
  assert.match(
    source,
    /onSubmit=\{[\s\S]*?preventDefault\(\)/m,
    'Expected submit handler to call preventDefault()'
  )
  // Trim the input before submitting.
  assert.match(
    source,
    /const\s+v\s*=\s*query\.trim\(\)/,
    'Expected trimming the query before submit'
  )
  // Only set when non-empty after trim.
  assert.match(
    source,
    /if\s*\(\s*v\s*\)\s*setSubmitted\(\s*v\s*\)/,
    'Expected to set submitted only when non-empty'
  )
  // Feedback region renders submitted content with ARIA status for screen readers.
  assert.match(
    source,
    /<p[^>]*className=\"submitted\"[^>]*role=\"status\"[^>]*aria-live=\"polite\"[^>]*>[\s\S]*You entered:[\s\S]*<strong>\{submitted\}<\/strong>/m,
    'Expected a polite live region announcing the submitted text'
  )
})
