// Node built-in tests validating color picker presence & behavior (static assertions)
import test from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'

const srcPath = 'src/App.tsx'

test('Color picker is clearly displayed on homepage', () => {
  const source = readFileSync(srcPath, 'utf8')
  assert.match(
    source,
    /<input[\s\S]*?type="color"[\s\S]*?>/i,
    'Expected an <input type=color> on the homepage'
  )
})

test('Color picker value is bound and used for preview', () => {
  const source = readFileSync(srcPath, 'utf8')
  // Checks: value bound to `color` state and preview uses inline style with backgroundColor
  assert.match(
    source,
    /value=\{\s*color\s*}\s*[\s\S]*?onChange=\{\(e\)\s*=>\s*setColor\(e\.target\.value\)\s*}/i,
    'Expected controlled color input bound to color state and updating via setColor'
  )
  assert.match(
    source,
    /className=\"color-preview\"[\s\S]*?style=\{\{\s*backgroundColor:\s*color\s*}\}/i,
    'Expected preview area to use selected color as backgroundColor'
  )
})

