import { useState } from 'react'

import './App.css'
import Chai from './chai.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Chai aur React with fun||Vite</h1>
      <Chai/>
    </>
  )
}

export default App;
