import React from 'react'
import "./ChatHeader.scss" 
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';

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
      </div>
    </div>
  )
}

export default ChatHeader