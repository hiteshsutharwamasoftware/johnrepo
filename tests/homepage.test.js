// Node built-in tests validating homepage textbox behaviors (static assertions)
import test from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'

const srcPath = 'src/App.tsx'

test('Given homepage, a textbox is prominently displayed', () => {
  const source = readFileSync(srcPath, 'utf8')
  assert.match(
    source,
    /<input[\s\S]*?type="text"[\s\S]*?>/i,
    'Expected an <input type=text> on the homepage'
  )
})

test('Textbox accepts and displays user input (controlled input present)', () => {
  const source = readFileSync(srcPath, 'utf8')
  // Check for controlled input props and onChange handler updating state
  assert.match(
    source,
    /value=\{\s*query\s*}\s*[\s\S]*?onChange=\{\(e\)\s*=>\s*setQuery\(e\.target\.value\)\s*}/i,
    'Expected controlled input with value bound to state and onChange updating it'
  )
})

test('Submitting textbox processes input and provides feedback', () => {
  const source = readFileSync(srcPath, 'utf8')
  // onSubmit prevents default and sets  when value present
  assert.match(
    source,
    /onSubmit=\{\(e\)\s*=>\s*\{[\s\S]*?e\.preventDefault\(\)\s*;?[\s\S]*?setSubmitted\(/i,
    'Expected onSubmit handler that prevents default and sets submitted value'
  )
  // Feedback paragraph renders the submitted value
  assert.match(
    source,
    /You entered:/i,
    'Expected feedback text indicating the submitted value is shown'
  )
})
