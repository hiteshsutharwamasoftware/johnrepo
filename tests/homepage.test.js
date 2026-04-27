// Node built-in tests validating homepage contains an accessible textbox
import test from "node:test"
import assert from "node:assert/strict"
import { readFileSync } from "node:fs"

const srcPath = "src/App.tsx"

test("Homepage displays a labeled textbox prominently", () => {
  const source = readFileSync(srcPath, "utf8")
  // Welcome header present
  assert.match(source, /<h1>\s*Welcome\s*<\/h1>/i, "Expected <h1>Welcome</h1> on the homepage")

  // Text input present with type="text" and the expected id
  assert.match(
    source,
    /<input[\s\S]*?id=["']homepage-input["'][\s\S]*?type=["']text["'][\s\S]*?>/i,
    "Expected a text input with id 'homepage-input'"
  )

  // Accessibility: label correctly associated to input via htmlFor/id
  assert.match(
    source,
    /<label[\s\S]*?htmlFor=["']homepage-input["'][\s\S]*?>[\s\S]*?<\/label>/i,
    "Expected a label with htmlFor='homepage-input' for screen readers"
  )

  // Ensure no color input sneaks in (redundant safeguard)
  assert.doesNotMatch(source, /<input[\s\S]*?type=\"color\"[\s\S]*?>/i, "Color input should not be present")
})
