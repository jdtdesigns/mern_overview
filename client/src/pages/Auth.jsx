import { useState } from 'react'
import axios from 'axios'

import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

import { NavLink } from 'react-router-dom'

function Auth({ isLogin }) {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const user = await axios.post('/auth/register', formData)

    console.log(user)
  }

  return (
    <Form onSubmit={handleSubmit} className="pt-5">
      <h2 className="text-center">{isLogin ? 'Log In' : 'Register'}</h2>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control name="email" onChange={handleInputChange} type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control name="password" onChange={handleInputChange} type="password" placeholder="Password" />
      </Form.Group>

      <div className="d-flex auth-controls mb-3">
        <NavLink to="/register">Register</NavLink>
        <span>/</span>
        <NavLink to="/login">Login</NavLink>
      </div>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  )
}

export default Auth