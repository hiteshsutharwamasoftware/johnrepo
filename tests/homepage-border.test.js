// Validate no borders are applied around the homepage container (#root)
import test from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'

const cssPath = 'src/index.css'

test('Homepage root container has no border styles', () => {
  const css = readFileSync(cssPath, 'utf8')
  const start = css.indexOf('#root')
  assert.ok(start >= 0, 'Expected #root style block in src/index.css')
  const braceOpen = css.indexOf('{', start)
  const braceClose = css.indexOf('}', braceOpen)
  assert.ok(braceOpen > start && braceClose > braceOpen, 'Malformed #root block')
  const block = css.slice(braceOpen + 1, braceClose)
  const borderPropPattern = /(^|[;{\s])border(?:-[a-z]+)?\s*:/mi
  assert.equal(borderPropPattern.test(block), false, 'No border-related CSS properties should be set on #root')
})

