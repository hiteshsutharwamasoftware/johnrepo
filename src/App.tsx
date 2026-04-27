import "./App.css"

function App() {
  return (
    <section id="center">
      <h1>Welcome</h1>
      <div className="homepage-textbox">
        <label htmlFor="homepage-input">Enter text</label>
        <input
          id="homepage-input"
          name="homepage-input"
          type="text"
          placeholder="Type here..."
        />
      </div>
    </section>
  )
}

export default App
