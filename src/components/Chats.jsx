import { doc, onSnapshot } from 'firebase/firestore'
import React, { useContext, useEffect, useState } from 'react'
import { db } from '../firebase'
import { currentUser } from 'firebase/auth'
import { AuthContext } from '../context/AuthContext'

const Chats = () => {
  const [chats, setChats] = useState([])
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    const unsub = onSnapshot(doc(db, 'userChats', currentUser.uid), (doc) => {
      setChats(doc.data())
    });

    return () => {
      unsub();
    }
  }, [currentUser.uid]);

  console.log(chats)

  return (
    <div className='chats'>
      <div className='userChat'>
        <img src='https://images.unsplash.com/photo-1496302662116-35cc4f36df92?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80' alt='' />
        <div className='userChatInfo'>
          <span>Ann Marie</span>
          <p>Hello</p>
        </div>
      </div>

      <div className='userChat'>
        <img src='https://images.unsplash.com/photo-1496302662116-35cc4f36df92?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80' alt='' />
        <div className='userChatInfo'>
          <span>Ann Marie</span>
          <p>Hello</p>
        </div>
      </div>

      <div className='userChat'>
        <img src='https://images.unsplash.com/photo-1496302662116-35cc4f36df92?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80' alt='' />
        <div className='userChatInfo'>
          <span>Ann Marie</span>
          <p>Hello</p>
        </div>
      </div>
    </div>
  )
}

export default Chats
