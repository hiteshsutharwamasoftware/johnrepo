import './App.css'

function App() {
  return (
    <section id='center'>
      <h1>Welcome</h1>
      <div className='homepage-textbox'>
        <label htmlFor='homepage-textbox'>Your Message</label>
        <input id='homepage-textbox' name='homepage-text' type='text' aria-label='Your Message' placeholder='Type here...' />
      </div>
    </section>
  )
}

export default App