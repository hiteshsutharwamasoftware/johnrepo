import { useRef, useState } from 'react'
import './App.css'

export default function App() {
  const [value, setValue] = useState('')
  const inputRef = useRef<HTMLInputElement | null>(null)

  function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setValue(inputRef.current?.value ?? '')
  }

  return (
    <>
      <section id="center">
        <h1>Get started</h1>
        <form onSubmit={onSubmit} aria-label="homepage-input" className="home-input">
          <label htmlFor="homepage-textbox" className="visually-hidden">Enter text</label>
          <input ref={inputRef} id="homepage-textbox" type="text" placeholder="Type here..." aria-label="Homepage textbox" />
          <button type="submit" className="counter">Submit</button>
        </form>
        {value !== '' && <p role="status">You submitted: <code>{value}</code></p>}
      </section>
      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}
