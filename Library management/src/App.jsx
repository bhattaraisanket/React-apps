import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sign from './Sign'
import Admin from './AdminLogin'

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='Container'>
      <Sign />
      <Admin />
    </div>
  )
}

export default App
