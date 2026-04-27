// Node built-in tests validating homepage Welcome header and accessible textbox
import test from "node:test"
import assert from "node:assert/strict"
import { readFileSync } from "node:fs"

const srcPath = "src/App.tsx"

test("Homepage shows Welcome header and an accessible textbox", () => {
  const source = readFileSync(srcPath, "utf8")
  // Prominent Welcome header present
  assert.match(source, /<h1>\s*Welcome\s*<\/h1>/i, "Expected <h1>Welcome</h1> on the homepage")
  // A textbox input is present
  assert.match(source, /<input[^>]*type=\"text\"[^>]*>/i, "Expected a text input on the homepage")
  // Accessible label present and associated
  assert.match(source, /<label[^>]*htmlFor=\"homepage-text\"[^>]*>\s*Your Text\s*<\/label>/i, "Textbox should have a visible label 'Your Text'")
  assert.match(source, /<input[^>]*id=\"homepage-text\"/i, "Textbox should have id 'homepage-text' matching the label's htmlFor")
  // No color input or extraneous UI
  assert.doesNotMatch(source, /<input[\s\S]*?type=\"color\"[\s\S]*?>/i, "Color input should not be present")
  assert.doesNotMatch(source, /color-preview|You entered:/i, "No leftover UI markers should be present")
})
