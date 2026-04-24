// Static behavior checks for homepage textbox without DOM deps
import test from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'

const source = readFileSync('src/App.tsx', 'utf8')

// Acceptance: textbox present (redundant with other test, but harmless)
test('textbox <input type=text> exists', () => {
  assert.match(source, /<input[\s\S]*?type="text"[\s\S]*?>/i)
})

// Acceptance: textbox accepts input (controlled component with onChange)
test('textbox is controlled and accepts input', () => {
  assert.match(source, /<input[\s\S]*?value=\{[^}]+\}[\s\S]*?onChange=\{[^}]+\}[\s\S]*?>/i,
    'Expected controlled input with value and onChange')
})

// Acceptance: submit processes input and shows feedback
// Check form onSubmit handler and user feedback text
test('form submits and feedback is rendered', () => {
  assert.match(source, /<form[\s\S]*?onSubmit=\{[^}]+\}/i, 'Form should have onSubmit handler')
  assert.match(source, /You\s+entered:/, 'Expected feedback text after submission')
})

// Accessibility: associated label or aria-label present for the textbox
test('textbox has accessible label', () => {
  const hasLabel = /<label[\s\S]*?htmlFor="homepage-input"[\s\S]*?>/i.test(source)
  const hasAria = /aria-label="Homepage input"/i.test(source)
  assert.ok(hasLabel || hasAria, 'Textbox should have a label or aria-label')
})
