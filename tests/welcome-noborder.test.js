// Ensure the Welcome <h1> has no border-related CSS applied
import test from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync, existsSync } from 'node:fs'

function hasH1Border(css) {
  if (!css) return false
  const patterns = [
    /(^|[\s,{])h1(\s|,|\{)[^{]*\{[^{}]*\bborder(?:-[a-z]+)?\s*:/ims,
    /#center\s+h1[^{]*\{[^{}]*\bborder(?:-[a-z]+)?\s*:/ims,
  ]
  return patterns.some((re) => re.test(css))
}

test('Welcome <h1> has no border styles in CSS', () => {
  const files = ['src/index.css', 'src/App.css']
  for (const path of files) {
    if (!existsSync(path)) continue
    const css = readFileSync(path, 'utf8')
    assert.equal(
      hasH1Border(css),
      false,
      `No border-related CSS should target <h1> in ${path}`
    )
  }
})

