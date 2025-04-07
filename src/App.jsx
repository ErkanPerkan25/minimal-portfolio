import { useState } from 'react'
import './tailwind.css'
import Intro from "./components/Intro"
import Portfolio from "./components/Portfolio"
import Experience from "./components/Experience"
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
        <Intro />
        <Portfolio />
        <Experience />
        <Contact />
        <Footer />
    </div>
  )
}

export default App;
