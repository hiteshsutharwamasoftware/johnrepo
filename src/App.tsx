import "./App.css"

function App() {
  return (
    <section id="center">
      <h1>Welcome</h1>
      <div className="homepage-textbox" role="group" aria-labelledby="homepage-textbox-label">
        <label id="homepage-textbox-label" htmlFor="homepage-input">Your text</label>
        <input id="homepage-input" name="homepageInput" type="text" />
      </div>
    </section>
  )
}

export default App
