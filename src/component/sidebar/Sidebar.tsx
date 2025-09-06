import React, { useEffect, useState } from 'react'
import "./Sidebar.scss" 
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import SidebarChannel from './sidebarChannel';
import MicIcon from '@mui/icons-material/Mic';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import SettingsIcon from '@mui/icons-material/Settings';
import { auth, db } from '../../firebase';
import { useAppSelector } from '../../app/hooks';
import useCollenction from '../../hooks/useCollenction';
import { collection, addDoc } from "firebase/firestore"; 

// Add a new document with a generated id.
const Sidebar = () => {
  const user = useAppSelector((state) => state.user.user)
  const {documents : channels} = useCollenction("channels")
  const addChannel = async () => {
    let channelName: string|null = prompt("新しいチャンネルを作成します");
    if (channelName){
      await addDoc(collection(db, "channels"), {
        channelName: channelName,
      });
    }

  }
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
              <AddIcon className="sidebarAddChannel" onClick={() => addChannel()} />
          </div>
          {
            channels.map((channel) => (
              <SidebarChannel channel={channel} id={channel.id} key ={channel.id}/>
            ))
          }
          <div className='sidebarChannelList'>
            
          </div>
          <div className='sidebarSettings'>
            <div className='sidebarAccount'>
              <img src={user?.photo} alt='' onClick={() => {
                const ok = window.confirm("ログアウトしますか？");
                if (ok) {
                  auth.signOut();
                  window.location.reload(); // ページをリロードしてアカウント選択を強制
                }
              }}/>
              <div className='accountName'>
                <h4>{user?.displayName}</h4>
                <span>#{user?.uid.substring(0 , 4)}</span>
              </div>
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