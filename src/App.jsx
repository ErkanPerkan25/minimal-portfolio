import { useState } from 'react'
import './tailwind.css'
import Intro from "./components/Intro"
import Portfolio from "./components/Portfolio"
import Experience from "./components/Experience"
import Contact from './components/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
        <Intro />
        <Portfolio />
        <Experience />
        <Contact />
    </div>
  )
}

export default App
