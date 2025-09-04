import React from 'react'
import "./ChatHeader.scss" 
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { PeopleAlt, PushPin } from '@mui/icons-material';
import SearchIcon from '@mui/icons-material/Search';

const ChatHeader = () => {
  return (
    <div className='chatHeader'>
      <div className='chatHeaderLeft'>
        <h3>
          <span className='chatHeaderHash'>#</span>
          test
        </h3>
      </div>
      <div className='chatHeaderRight'>
        <NotificationsNoneIcon/>
        <PushPin />
        <PeopleAlt />
        <div className='chatHeaderSearch'>
          <input type='text' placeholder='検索'/>
          <SearchIcon />

        </div>
      </div>
    </div>
  )
}

export default ChatHeader