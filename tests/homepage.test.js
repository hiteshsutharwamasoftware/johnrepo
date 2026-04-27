// Node built-in tests validating homepage with a labeled textbox (static assertions)
import test from "node:test"
import assert from "node:assert/strict"
import { readFileSync } from "node:fs"

const srcPath = "src/App.tsx"

test("Homepage displays a prominent Welcome and a labeled textbox", () => {
  const source = readFileSync(srcPath, "utf8")
  // Prominent Welcome header present
  assert.match(source, /<h1>\s*Welcome\s*<\/h1>/i, "Expected <h1>Welcome</h1> on the homepage")
  // Textbox present and accessible via label
  assert.match(source, /<label[^>]*id=\"homepage-textbox-label\"[\s\S]*?>[\s\S]*?<\/label>/i, "Textbox label should be present with id")
  assert.match(
    source,
    /<input[^>]*id=\"homepage-input\"[^>]*type=\"text\"[^>]*>/i,
    "Textbox input with type=text and matching id should be present"
  )
  // Group has accessible association
  assert.match(
    source,
    /<div[^>]*className=\"homepage-textbox\"[^>]*aria-labelledby=\"homepage-textbox-label\"[^>]*>/i,
    "Textbox group should reference the label via aria-labelledby"
  )
  // No extraneous UI
  assert.doesNotMatch(source, /<input[\s\S]*?type=\\\"color\\\"[\s\S]*?>/i, "No color input should be present")
})
