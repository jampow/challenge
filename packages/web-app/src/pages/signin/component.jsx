import React, { useState } from 'react'
import {
  Col,
  Container,
  Button,
  Form,
  Row
} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { doLogin } from '../../api/signin'

const Login = props => {
  const [errors, setErrors] = useState(null)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleEmailChange = ({ currentTarget: { value }}) => setEmail(value)
  const handlePasswordChange = ({ currentTarget: { value }}) => setPassword(value)

  const handleSubmit = async (e) => {
    e.preventDefault()

    const resp = await doLogin({
      email, password
    })

    if(resp.error) {
      setErrors(resp.error)
    } else {
      console.log(resp)
      setErrors(null)
    }
  }

  return(
    <Container>
      <Row className="justify-content-md-center">
        <Col xs lg="4">
          <h1>Login</h1>
          <Form noValidate onSubmit={handleSubmit}>
            <Form.Group noValidate onSubmit={handleSubmit}>
              <Form.Control
                name="email"
                placeholder="email"
                onChange={handleEmailChange}
                isInvalid={errors && errors.email}
              />
              <Form.Control.Feedback type="invalid">
                {errors && errors.email}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Control
                name="password"
                placeholder="Password"
                onChange={handlePasswordChange}
                isInvalid={errors && errors.password}
              />
              <Form.Control.Feedback type="invalid">
                {errors && errors.password}
              </Form.Control.Feedback>
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