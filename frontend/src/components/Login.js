import './styles/Login.css'
import { useState } from 'react'
const axios = require('axios')

export default function Login() {
  const [loginUser, setLoginUser] = useState({
    email: '',
    password: ''
  })

  const handleChange = ({ target }) => {
    const { value } = target
    setLoginUser({
      ...loginUser,
      [target.name]: value
    })
  }

  const handleSubmit = event => {
    event.preventDefault()
    axios.post('/login', loginUser)
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <div className="Login">
      {/* <img src="https://i.pinimg.com/originals/42/74/0c/42740cb75a02b585beeed724b6522cc1.jpg" alt="basketball court" /> */}
      <form className="Login__form" onSubmit={handleSubmit}>
        <h1 className="text-center">Please sign in</h1>
        <input type="email" id="email" name="email" className="form-control" placeholder="Email address" onChange={handleChange} required />
        <input type="password" name="password" className="form-control" placeholder="Password" onChange={handleChange} required />
        <button className="btn btn-primary btn-lg btn-block" type="submit">Sign in</button>
      </form>
    </div>
    
  )
}