// Node built-in tests validating minimal homepage (static assertions)
import test from "node:test"
import assert from "node:assert/strict"
import { readFileSync } from "node:fs"

const srcPath = "src/App.tsx"

test("Homepage shows only a Welcome message", () => {
  const source = readFileSync(srcPath, "utf8")
  assert.match(
    source,
    /<h1>\s*Welcome\s*<\/h1>/i,
    "Expected a single Welcome heading on the homepage"
  )
})

test("No inputs, buttons, forms, or nav elements present", () => {
  const source = readFileSync(srcPath, "utf8")
  assert.doesNotMatch(source, /<input[\s\S]*?>/i, "Did not expect any <input> elements")
  assert.doesNotMatch(source, /<button[\s\S]*?>/i, "Did not expect any <button> elements")
  assert.doesNotMatch(source, /<form[\s\S]*?>/i, "Did not expect any <form> elements")
  assert.doesNotMatch(source, /<nav[\s\S]*?>/i, "Did not expect any <nav> elements")
})

test("Welcome remains the only visible element after reload (static check)", () => {
  const source = readFileSync(srcPath, "utf8")
  const matches = source.match(/<h1>\s*Welcome\s*<\/h1>/gi) || []
  assert.equal(matches.length, 1, "Expected only one Welcome heading present")
})
