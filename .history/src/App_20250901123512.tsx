import { useState } from 'react'
import './App.scss'
import Sidebar from './component/sidebar/Sidebar'
import { Chat } from '@mui/icons-material'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='app'>
        <Sidebar />
        <Chat />
      </div>
    </>
  )
}

export default App
