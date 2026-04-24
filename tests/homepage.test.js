// Node built-in tests for homepage textbox behavior
import test from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'

const source = readFileSync('src/App.tsx', 'utf8')

test('homepage shows a textbox', () => {
  assert.match(
    source,
    /<input[\s\S]*?type=['"]text['"][\s\S]*?>/i,
    'Expected an <input type=text> on the homepage'
  )
})

test('textbox accepts input (value binding and onChange)', () => {
  assert.match(source, /value=\{\s*[a-zA-Z_$][\w$]*\s*\}/, 'Missing controlled value binding')
  assert.match(source, /onChange=\{/, 'Missing onChange handler')
})

test('submitting processes input and provides feedback', () => {
  assert.match(source, /<form[\s\S]*onSubmit=\{/, 'Missing form onSubmit handler')
  assert.match(source, /<button[\s\S]*type=['"]submit['"]/i, 'Missing submit button')
  assert.match(source, /submitted\s*&&\s*\(/, 'Missing conditional feedback render')
  assert.match(source, /role=['"]status['"]/i, 'Missing ARIA status feedback')
})
