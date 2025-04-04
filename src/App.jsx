import { useState } from 'react'
import './tailwind.css'
import Intro from "./components/Intro"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
        <Intro />
    </div>
  )
}

export default App
