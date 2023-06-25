import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className='logo'>
        Conversa
      </span>
      <div className='user'>
        <img src='https://images.unsplash.com/photo-1496302662116-35cc4f36df92?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80' alt='' />
        <span>Leonardo</span>
        <button>Logout</button>
      </div>
    </div>
  )
}

export default Navbar
