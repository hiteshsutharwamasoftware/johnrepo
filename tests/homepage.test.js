// Node built-in tests validating Welcome-only homepage (static assertions)
import test from "node:test"
import assert from "node:assert/strict"
import { readFileSync } from "node:fs"

const srcPath = "src/App.tsx"

test("Homepage displays only a Welcome message", () => {
  const source = readFileSync(srcPath, "utf8")
  // Prominent Welcome header present
  assert.match(source, /<h1>\s*Welcome\s*<\/h1>/i, "Expected <h1>Welcome</h1> on the homepage")
  // No inputs (text or color), no buttons, no color preview/value
  assert.doesNotMatch(source, /<input[\s\S]*?>/i, "No <input> elements should be present")
  assert.doesNotMatch(source, /<button[\s\S]*?>/i, "No <button> elements should be present")
  assert.doesNotMatch(source, /color-preview|color-picker|You entered:/i, "No leftover UI markers should be present")
})
