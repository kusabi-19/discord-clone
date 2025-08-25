import { useState } from 'react'
import './App.scss'
import Sidebar from './component/sidebar/Sidebar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='app'>
        {}
        <Sidebar />
      </div>
    </>
  )
}

export default App
