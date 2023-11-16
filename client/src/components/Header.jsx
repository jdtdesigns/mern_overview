import { useMutation, gql } from '@apollo/client'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'

import { NavLink, useNavigate } from 'react-router-dom'

import { useStore } from '../store'

const LOGOUT_USER = gql`
  mutation {
    logout
  }
`

function Header() {
  const { user, setState } = useStore()
  const navigate = useNavigate()

  const [logoutUser] = useMutation(LOGOUT_USER)

  const logout = async (e) => {
    e.preventDefault();

    await logoutUser()

    setState(oldState => ({
      ...oldState,
      user: null
    }))
    navigate('/')
  }

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">Auth App</Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {user ? (
              <>
                <p>{user.email}</p>
                <a href="/logout" onClick={logout}>Log Out</a>
              </>
            ) : (
              <>
                <NavLink to="/register">Register</NavLink>
                <span>or</span>
                <NavLink to="/login">Log In</NavLink>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header