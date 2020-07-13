import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap'
import { delToken } from '../../../api/common'
import { useHistory } from 'react-router-dom'

const Menu = () => {
  const history = useHistory()

  const handleLogout = () => {
    delToken()
    history.push('/')
  }

  return (
    <Navbar variant="dark" bg="dark" expand="lg">
      <Navbar.Brand />
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse>
        <Nav
          activeKey="/home"
        >
          <Nav.Item>
            <Nav.Link as={Link} to="/dashboard">Meus Pedidos</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link onClick={handleLogout}>Sair</Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Menu
