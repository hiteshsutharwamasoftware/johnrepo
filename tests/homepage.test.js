// Node built-in tests validating homepage includes an accessible textbox
import test from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'

const srcPath = 'src/App.tsx'

test('Homepage displays Welcome header and a textbox', () => {
  const source = readFileSync(srcPath, 'utf8')
  // Welcome header present
  assert.match(source, /<h1>\s*Welcome\s*<\/h1>/i, 'Expected <h1>Welcome</h1> on the homepage')
  // A text input is present
  assert.match(source, /<input[^>]*type=['"]text['"][^>]*>/i, 'Expected a text input on the homepage')
  // The textbox has an id we can target
  assert.match(source, /id=['"]homepage-textbox['"]/i, 'Textbox should have id=homepage-textbox')
  // Proper accessible labelling: either label+htmlFor or aria-label
  const hasLabel = /<label[^>]*htmlFor=['"]homepage-textbox['"][^>]*>[^<]*<\/label>/i.test(source)
  const hasAria = /<input[^>]*aria-label=['"][^'"]+['"][^>]*>/i.test(source)
  assert.ok(hasLabel || hasAria, 'Textbox should be accessible via label or aria-label')
  // No color picker or unrelated UI
  assert.doesNotMatch(source, /type=['"]color['"]/i, 'Should not include a color picker')
})
