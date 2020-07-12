import React, { useState } from 'react'
import {
  Alert,
  Col,
  Container,
  Button,
  Form,
  Row
} from 'react-bootstrap'
import {
  Link,
  useHistory
} from 'react-router-dom'
import { doLogin } from '../../api/signin'

const Login = props => {
  const history = useHistory()
  const [genericError, setGenericError] = useState(false)
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

    setErrors(resp.errors || null)
    if(errors) return

    if (resp.status !== 200) {
      setGenericError(true)
      return
    }

    history.push('/dashboard')
  }

  const GenericError = ({ show }) => {
    if (!show) return ''
    return (
      <Row>
        <Col>
          <Alert type="Danger">
            Não foi possível entrar. E-mail ou senha inválidos.
          </Alert>
        </Col>
      </Row>
    )
  }

  return(
    <Container>
      <GenericError show={genericError} />
      <Row className="justify-content-md-center">
        <Col xs lg="4">
          <h1>Login</h1>
          <Form noValidate onSubmit={handleSubmit}>
            <Form.Group noValidate onSubmit={handleSubmit}>
              <Form.Control
                name="email"
                type="email"
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
                type="password"
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