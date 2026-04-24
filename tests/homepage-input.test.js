// Validate the homepage textbox accepts input and displays it after submit
import test from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'

test('homepage textbox accepts text input', () => {
  const source = readFileSync('src/App.tsx', 'utf8')
  assert.match(
    source,
    /<input[\s\S]*?id=\"homepage-input\"[\s\S]*?type=\"text\"[\s\S]*?value=\{query\}[\s\S]*?onChange=\{\(e\) => setQuery\(e\.target\.value\)\}[\s\S]*?>/i,
    'Textbox should bind value to state and update on change'
  )
})

test('homepage displays submitted feedback', () => {
  const source = readFileSync('src/App.tsx', 'utf8')
  assert.match(
    source,
    /<p className=\"submitted\"[\s\S]*?>[\s\S]*You entered:[\s\S]*<\/p>/i,
    'Submitting should render a feedback paragraph with the entered text'
  )
})

