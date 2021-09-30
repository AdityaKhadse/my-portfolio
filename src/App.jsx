import { useState } from 'react'
import './App.css'
import Home from './components/home'
import Navbar from './components/navbar'
import About from './components/about'
import Skills from './components/skills'
import Footer from './components/footer'
import Projects from './components/projects'
import Work from './components/work'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Work />
      <Projects/>
      <Footer/>
    </div>
  )
}

export default App
