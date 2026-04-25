// Node built-in tests validating homepage color picker behavior (static assertions)
import test from "node:test"
import assert from "node:assert/strict"
import { readFileSync } from "node:fs"

const srcPath = "src/App.tsx"

test("Homepage includes an accessible color picker input", () => {
  const source = readFileSync(srcPath, "utf8")
  assert.match(
    source,
    /<input[\s\S]*?type=\"color\"[\s\S]*?>/i,
    "Expected an <input type=\"color\"> on the homepage"
  )
  // Ensure it is labeled for accessibility either via label or aria-label
  assert.match(
    source,
    /(aria-label=\"(Color picker|Pick a color)\")|(<label[\s\S]*for=\"color-picker\")/i,
    "Expected the color picker to have an accessible label"
  )
})

test("Color picker is controlled and updates selected color state", () => {
  const source = readFileSync(srcPath, "utf8")
  // Look for a color state and handlers
  assert.match(
    source,
    /const\s*\[\s*color\s*,\s*setColor\s*]\s*=\s*useState<*[^)]*>*\([^)]*\)/i,
    "Expected a React state tuple for color, e.g. useState(...)"
  )
  assert.match(
    source,
    /<input[\s\S]*type=\"color\"[\s\S]*value=\{\s*color\s*}[\s\S]*onChange=\{\s*\(e\)\s*=>\s*setColor\(e\.target\.value\)\s*}/i,
    "Expected controlled color input with value bound to state and onChange updating it"
  )
})

test("Selected color feedback is shown to users", () => {
  const source = readFileSync(srcPath, "utf8")
  // Textual feedback
  assert.match(
    source,
    /Selected color:/i,
    "Expected feedback text \"Selected color:\" to be rendered"
  )
  // Optional swatch that reflects the color via inline style
  assert.match(
    source,
    /style=\{\s*\{\s*background(Color)?:\s*color\s*}\s*}/i,
    "Expected a small swatch whose background reflects the selected color"
  )
})

