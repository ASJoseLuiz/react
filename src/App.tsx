import { useState } from 'react'
import './App.css'

function App() {

  const [name] = useState('maluquice')
  
  return (
    <>
    <h2>{name}</h2>
    </>
  )
}

export default App
