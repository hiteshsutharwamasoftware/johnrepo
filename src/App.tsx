import "./App.css"

function App() {
  return (
    <section id="center">
      <h1>Welcome</h1>
      <div className="homepage-textbox" role="group" aria-labelledby="homepage-text-label">
        <label id="homepage-text-label" htmlFor="homepage-text">Your Text</label>
        <input
          type="text"
          id="homepage-text"
          name="homepage-text"
          placeholder="Type here..."
          aria-required="false"
        />
      </div>
    </section>
  )
}

export default App
