// Updated: Homepage should not include a color picker or related UI
import test from "node:test"
import assert from "node:assert/strict"
import { readFileSync } from "node:fs"

const srcPath = "src/App.tsx"

test("No color picker is present on the homepage", () => {
  const source = readFileSync(srcPath, "utf8")
  assert.doesNotMatch(source, /<input[\s\S]*?type=\"color\"[\s\S]*?>/i, "Color input should be removed")
  assert.doesNotMatch(source, /color-preview|color-picker/i, "Color preview or group should be absent")
})
