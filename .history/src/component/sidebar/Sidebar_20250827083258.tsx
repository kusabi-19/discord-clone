import React from 'react'
import "./Sidebar.scss" 
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import SidebarChannel from './sidebarChannel';
import MicIcon from '@mui/icons-material/Mic';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import SettingsIcon from '@mui/icons-material/Settings';

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
              <h4>ShinCode</h4>
              <span>#8162</span>
            </div>
            <div className='sidebarVoice'>
              <MicIcon />
              <HeadphonesIcon />
              <SettingsIcon />
            </div>

          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Sidebar