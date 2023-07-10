import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext';
import { ChatContext } from '../context/ChatContext';

const Message = ({message}) => {
  const {currentUser} = useContext(AuthContext);
  const {data} = useContext(ChatContext);

  return (
    <div className='message owner'>
      <div className='messageInfo'>
        <img
          src='https://images.unsplash.com/photo-1496302662116-35cc4f36df92?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80'
          alt=''
        />
        <span>Just now</span>
      </div>
      <div className='messageContent'>
        <p>Heyo</p>
        <img
        src='https://images.unsplash.com/photo-1496302662116-35cc4f36df92?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80'
        alt=''
        />
      </div>
    </div>
  )
}

export default Message
