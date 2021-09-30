import { useState } from 'react'
import './App.css'
import Home from './components/home'
import Navbar from './components/navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar/>
      <Home/>
    </div>
  )
}

export default App
