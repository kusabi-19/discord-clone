import React from 'react'
import "./Sidebar.sass" 
const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='sidebarLeft'>
        <div className='serverIcon'>
          <img src="./vite.svg" alt='' />
        </div>
        <div className='serverIcon'>
          <img src="./vite.svg" alt='' />
        </div>
      </div>
      <div className='sidebarRight'>
        <div className='sidebarTop'>
          <h3>Discord</h3>
        </div>
      </div>
    </div>
  )
}

export default Sidebar