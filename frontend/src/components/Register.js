import { useState } from 'react'
import './styles/Register.css'
const axios = require('axios')

export default function Register() {
  const [registerUser, setRegisterUser] = useState({
    first_name: 'alan',
    last_name: 'tran',
    email: 'alan@gmail.com',
    password: '123',
    height: '',
    age: '24',
    primary_role: 'PG',
    secondary_role: 'SG',
    country: 'Canada',
    province: 'Quebec',
    city: 'Montreal',
    reliability: ''
  })

  const handleChange = ({ target }) => {
    const { value } = target
    setRegisterUser({
      ...registerUser,
      [target.name]: value
    })
  }

  const handleSubmit = event => {
    event.preventDefault()
    fetch('/api/register', {
      method: 'POST',
      body: JSON.stringify(registerUser),
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      }
    })
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }

  return (
    <form className="Register" onSubmit={handleSubmit}>
      <h1>Register now to start finding pickup games!</h1>
      <div className="row">
        <div className="col-3">
          <label for="email" className="form-label">Email</label>
          <input type="email" className="form-control" id="email" name="email" onChange={handleChange} />
        </div>
      </div>
      <div className="row">
        <div className="col-3">
          <label for="firstName" className="form-label">First name</label>
          <input type="text" className="form-control" id="firstName" name="first_name" onChange={handleChange} />
        </div>
        <div className="col-3">
          <label for="lastName" className="form-label">Last name</label>
          <input type="text" className="form-control" id="lastName" name="last_name" onChange={handleChange} />
        </div>
      </div>
      <div className="row">
        <div className="col-3">
          <label for="password1" className="form-label">Password</label>
          <input type="password" className="form-control" id="password1" name="password" onChange={handleChange} />
        </div>
        <div className="col-3">
          <label for="password2" className="form-label">Repeat password</label>
          <input type="password" className="form-control" id="password2" name="password2" onChange={handleChange} />
        </div>
      </div>
      <div className="row">
        <label for="height">Height</label>
        <div className="col-1">
          <div className="input-group">
            <select className="form-select" id="height" name="height" onChange={handleChange} >
              <option value="5'0">5'0"</option>
              <option value="5'1">5'1"</option>
              <option value="5'2">5'2"</option>
              <option value="5'3">5'3"</option>
              <option value="5'4">5'4"</option>
              <option value="5'5">5'5"</option>
              <option value="5'6">5'6"</option>
              <option value="5'7">5'7"</option>
              <option value="5'8">5'8"</option>
              <option value="5'9">5'9"</option>
              <option value="5'10">5'10"</option>
              <option value="5'11">5'11"</option>
              <option value="6'0">6'0"</option>
              <option value="6'1">6'1"</option>
              <option value="6'2">6'2"</option>
              <option value="6'3">6'3"</option>
              <option value="6'4">6'4"</option>
              <option value="6'5">6'5"</option>
              <option value="6'6">6'6"</option>
              <option value="6'7">6'7"</option>
              <option value="6'8">6'8"</option>
              <option value="6'9">6'9"</option>
              <option value="6'10">6'10"</option>
              <option value="6'11">6'11"</option>
            </select>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-1">
            <label for="age" className="form-label">Age</label>
            <input type="number" className="form-control" id="age" name="age" min="0" onChange={handleChange} />
          </div>
      </div>
      <div className="row">
        <div className="col-2">
          <label for="primaryRole" className="form-label">Primary role</label>
            <select className="form-select" id="primaryRole" name="primary_role" onChange={handleChange}>
            <option value="PG">Point guard</option>
            <option value="SG">Shooting guard</option>
            <option value="C">Center</option>
            <option value="SF">Small forward</option>
            <option value="PF">Power forward</option>
          </select>
        </div>
        <div className="col-2">
          <label for="secondaryRole" className="form-label">Secondary role</label>
          <select className="form-select" id="secondaryRole" name="secondary_role" onChange={handleChange}>
            <option value="">None</option>
            <option value="PG">Point guard</option>
            <option value="SG">Shooting guard</option>
            <option value="C">Center</option>
            <option value="SF">Small forward</option>
            <option value="PF">Power forward</option>
          </select>
        </div>
      </div>
      <div className="row">
        <div className="col-2">
          <label for="age" className="form-label">Country</label>
          <input type="text" className="form-control" id="country" name="country" onChange={handleChange} />
        </div>
        <div className="col-2">
          <label for="age" className="form-label">Province</label>
          <input type="text" className="form-control" id="province" name="province" onChange={handleChange} />
        </div>
        <div className="col-2">
          <label for="age" className="form-label">City</label>
          <input type="text" className="form-control" id="city" name="city" onChange={handleChange} />
        </div>
      </div>
      <button type="submit" className="btn btn-secondary">Start hooping baybeeee</button>
    </form>
  )
}