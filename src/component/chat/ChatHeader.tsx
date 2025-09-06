import React from 'react'
import "./ChatHeader.scss" 
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { Help, PeopleAlt, PushPin, Send } from '@mui/icons-material';
import SearchIcon from '@mui/icons-material/Search';
type Props = {
  channelName : string | null
}

const ChatHeader = (props : Props) => {
  const {channelName} = props;
  return (
    <div className='chatHeader'>
      <div className='chatHeaderLeft'>
        <h3>
          <span className='chatHeaderHash'>#</span>
          {channelName}
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
        <Send />
        <Help/>
      </div>
    </div>
  )
}

export default ChatHeader