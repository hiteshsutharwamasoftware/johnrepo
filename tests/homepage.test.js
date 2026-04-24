// Node built-in tests for homepage textbox behavior
import test from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'

const source = readFileSync('src/App.tsx', 'utf8')

test('homepage shows a prominent textbox', () => {
  assert.match(
    source,
    /<input[\s\S]*?type="text"[\s\S]*?>/i,
    'Expected an <input type=text> on the homepage'
  )
})

test('textbox accepts input: state + value binding present', () => {
  assert.match(source, /useState\(""\)/, 'Expected useState() for textbox state')
  assert.match(
    source,
    /<input[\s\S]*?value=\{query\}[\s\S]*?>/i,
    'Expected input value bound to state'
  )
  assert.match(
    source,
    /onChange=\{\(e\)\s*=>\s*setQuery\(e\.target\.value\)\}/,
    'Expected onChange to update state'
  )
})

test('submitting input provides feedback to the user', () => {
  assert.match(
    source,
    /onSubmit=\{\(e\) => \{[\s\S]*?setSubmitted\(v\)/,
    'Expected submit handler to set submitted value'
  )
  assert.match(source, /role="status"/, 'Expected a status role element for feedback')
  assert.match(source, /You entered:/, 'Expected visible feedback copy after submit')
})
