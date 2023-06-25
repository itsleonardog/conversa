import React from 'react'
import Add from '../img/addAvatar.png'

const Register = () => {
  return (
    <div className='formContainer'>
      <div className='formWrapper'>
        <span className='logo'>Conversa</span>
        <span className='title'>Register</span>
        <form>
          <input type='text' placeholder='display name' />
          <input type='email' placeholder='email' />
          <input type='password' placeholder='password' />
          <input style={{display:"none"}} type='file' />
          <label htmlFor='file'>
            <img src={Add} alt='' />
            <span>Add an avatar</span>
          </label>
          <button>Sign Up</button>
          <p>Don't have an account? Login</p>
        </form>
      </div>
    </div>
  )
}

export default Register
