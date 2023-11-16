import { useState } from 'react'
import { useMutation, gql } from '@apollo/client'

import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

import { NavLink, useNavigate } from 'react-router-dom'

import { useStore } from '../store'

const initialFormData = {
  email: '',
  password: ''
}

const REGISTER_USER = gql`
  mutation RegisterUser($email: String!, $password: String!) {
    register(email: $email, password: $password) {
      _id
      email 
      hobbies {
        _id
        name
      }
    }
  }
`

const LOGIN_USER = gql`
  mutation LoginUser($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      _id
      email 
      hobbies {
        _id
        name
      }
    }
  }
`

function Auth({ isLogin }) {
  const { setState } = useStore()
  const [formData, setFormData] = useState(initialFormData)
  const navigate = useNavigate()
  const [errorMessage, setErrorMessage] = useState('')
  const [authenticateUser] = useMutation(isLogin ? LOGIN_USER : REGISTER_USER, {
    variables: formData
  })

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const resolverName = isLogin ? 'login' : 'register'

      const { data: userData } = await authenticateUser()

      console.log(userData)

      setFormData({ ...initialFormData })

      setState(oldState => ({
        ...oldState,
        user: userData[resolverName]
      }))
      setErrorMessage('')

      navigate('/')
    } catch (error) {
      setErrorMessage(error.message)
    }
  }

  return (
    <Form onSubmit={handleSubmit} className="pt-5">
      <h2 className="text-center">{isLogin ? 'Log In' : 'Register'}</h2>

      {errorMessage && <p className="text-center text-danger mt-3">{errorMessage}</p>}

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          type="email"
          placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          type="password"
          placeholder="Password" />
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