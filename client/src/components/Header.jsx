import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container'

import { NavLink } from 'react-router-dom'

function Header({ user }) {

  const logout = (e) => {
    e.preventDefault();
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
                <p>jd@test.com</p>
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