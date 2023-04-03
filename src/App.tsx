import { useState } from 'react'
import './App.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app'>
      <h1>Blank Source React Typescript</h1>
      <p className='read-the-docs'>Click on the Vite and React logos to learn more</p>
    </div>
  )
}

export default App
