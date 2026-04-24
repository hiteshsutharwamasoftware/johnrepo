// Homepage textbox behavior tests using Node's built-in test runner
import test from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'

test('homepage has a prominent textbox', () => {
  const source = readFileSync('src/App.tsx', 'utf8')
  assert.match(
    source,
    /<input[\s\S]*?type="text"[\s\S]*?>/i,
    'Expected an <input type=text> on the homepage'
  )
})

test('textbox accepts and displays input', () => {
  const source = readFileSync('src/App.tsx', 'utf8')
  assert.match(source, /value=\{\s*query\s*\}/, 'Input should be controlled by state')
  assert.match(
    source,
    /onChange=\{\(e\) => setQuery\(e\.target\.value\)\}/,
    'Input should update state on change'
  )
})

test('submission provides feedback', () => {
  const source = readFileSync('src/App.tsx', 'utf8')
  assert.match(
    source,
    /onSubmit=\{\(e\) => \{[\s\S]*setSubmitted\(v\)/,
    'Form submit should set submitted value'
  )
  assert.match(
    source,
    /<p className="submitted" role="status" aria-live="polite">[\s\S]*You entered:/,
    'Expected feedback element announcing submitted text'
  )
})
