import { useState } from 'react'
import './styles/Register.css'
const axios = require('axios')

export default function Register() {
  const [registerUser, setRegisterUser] = useState({
    firstName: 'alan',
    lastName: 'tran',
    email: 'alan@gmail.com',
    password1: '123',
    password2: '123',
    heightFeet: '6',
    heightInches: '0',
    age: '24',
    primaryRole: 'PG',
    secondaryRole: 'SG',
    country: 'Canada',
    province: 'Quebec',
    city: 'Montreal'
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
          <input type="text" className="form-control" id="firstName" name="firstName" onChange={handleChange} />
        </div>
        <div className="col-3">
          <label for="lastName" className="form-label">Last name</label>
          <input type="text" className="form-control" id="lastName" name="lastName" onChange={handleChange} />
        </div>
      </div>
      <div className="row">
        <div className="col-3">
          <label for="password1" className="form-label">Password</label>
          <input type="password" className="form-control" id="password1" name="password1" onChange={handleChange} />
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
            <select className="form-select" id="height" name="heightFeet" onChange={handleChange} >
              <option value={4}>4</option>
              <option value={5}>5</option>
              <option value={6}>6</option>
              <option value={7}>7</option>
            </select>
            <span className="input-group-text">ft</span>
          </div>
        </div>
        <div className="col-1">
          <div className="input-group">
            <select className="form-select" name="heightInches" onChange={handleChange}>
              <option value={0}>0</option>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
              <option value={6}>6</option>
              <option value={7}>7</option>
              <option value={8}>8</option>
              <option value={9}>9</option>
              <option value={10}>10</option>
              <option value={11}>11</option>
            </select>
            <span className="input-group-text">in</span>
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
            <select className="form-select" id="primaryRole" name="primaryRole" onChange={handleChange}>
            <option value="Point guard">Point guard</option>
            <option value="Shooting guard">Shooting guard</option>
            <option value="Center">Center</option>
            <option value="Small forward">Small forward</option>
            <option value="Power forward">Power forward</option>
          </select>
        </div>
        <div className="col-2">
          <label for="secondaryRole" className="form-label">Secondary role</label>
          <select className="form-select" id="secondaryRole" name="secondaryRole" onChange={handleChange}>
            <option value="">None</option>
            <option value="Point guard">Point guard</option>
            <option value="Shooting guard">Shooting guard</option>
            <option value="Center">Center</option>
            <option value="Small forward">Small forward</option>
            <option value="Power forward">Power forward</option>
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