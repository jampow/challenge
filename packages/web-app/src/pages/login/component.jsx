import React from 'react'
import {
  Col,
  Container,
  Button,
  Form,
  Row
} from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Login = props => {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col xs lg="4">
          <h1>Login</h1>
          <Form>
            <Form.Group>
              <Form.Control type="email" placeholder="E-mail" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="primary" type="submit" block>
              Entrar
            </Button>
            <Button as={Link} to="/signup" variant="outline-primary" block>
              Criar conta
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default Login