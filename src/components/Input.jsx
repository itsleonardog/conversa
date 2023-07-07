import React, { useContext, useState } from 'react'
import Attach from '../img/attach.png'
import Img from '../img/img.png'
import { AuthContext } from '../context/AuthContext';
import { ChatContext } from '../context/ChatContext';


const Input = () => {
  const [text, setText] = useState('');
  const [img, setImg] = useState(null);

  const {currentUser} = useContext(AuthContext);
  const {data} = useContext(ChatContext);

  const handleSend = () => {

  }

  return (
    <div className='input'>
      <input type='text' placeholder='Type something...' onChange= { e => setText(e.target.value)} />
      <div className='send'>
        <img src={Attach} alt='' />
        <input type='file' style={{display:'none'}} id='file' onChange={ e => setImg(e.target.files[0])} />
        <label>
          <img src={Img} alt='' />
        </label>
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  )
}

export default Input
