import PropTypes from 'prop-types'
import { useState } from 'react'
//import Togglable from './togglableLogin'
import Notification from './notification'
const LoginForm = (props) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleUsernameChange = ({ target }) => {
    setUsername(target.value)
  }
  const handlePasswordChange = ({ target }) => {
    setPassword(target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    // const userLoginNow=
    props.handleLogin ({ username, password })
    setUsername('')
    setPassword('')


  }
  LoginForm.propTypes = {
    handleLogin: PropTypes.func.isRequired,
  }

  return (
    <div>
      <div>
{/* <Togglable buttonLabel='login'> */}
        <form onSubmit={handleSubmit } >
          {/* <Notification  /> */}
          <div>
           username
            <input
              id='username'
              type="name"
              value={username}
              name="Username"
              onChange={handleUsernameChange}
              autoComplete="name"
            />
          </div>
          <div>
           password
            <input
              id='password'
              type="password"
              value={password}
              name="password"
              autoComplete="password"
              onChange={handlePasswordChange}
            />
          </div>
          <button id="login-button" type="submit">log in</button>
        </form>
{/* </Togglable> */}
      </div>
    </div>)}

export default LoginForm