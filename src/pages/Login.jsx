import React from 'react'
import Add from '../img/addAvatar.png'

const Login = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault()
    const email = e.target[0].value
    const password = e.target[1].value

    try {

    } catch(err) {
      console.error(err);
      setErr(true)
    }
  }

  return (
    <div className='formContainer'>
      <div className='formWrapper'>
        <span className='logo'>Conversa</span>
        <span className='title'>Login</span>
        <form>
          <input type='email' placeholder='email' />
          <input type='password' placeholder='password' />
          <button>Sign In</button>
          <p>Don't have an account? Register</p>
        </form>
      </div>
    </div>
  )
}

export default Login
