import React from 'react'
import "./Sidebar.scss" 
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import SidebarChannel from './sidebarChannel';

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
          <ExpandMoreIcon />
        </div>
        <div className='sidebarChannels'>
          <div className='sidebarChannelsHeader'>
            <div className='sidebarHeader'>
              <ExpandMoreIcon />
              プログラミングチャンネル
            </div>
            <AddIcon className='sidebarAddChannel'/>
          </div>
          <div className='sidebarChannelList'>
            <SidebarChannel />
            <SidebarChannel />
            <SidebarChannel />
            <SidebarChannel />
          </div>
          <div className='sidebarFooter'>
            <div className='sidebarAccount'>
              <img src='./icon.png' alt=''></img>

            </div>

          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Sidebar