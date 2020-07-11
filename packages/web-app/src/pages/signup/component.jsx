import React, { useState } from 'react'
import {
  Container,
  Row,
  Col,
  Form,
  Button
} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { createUser } from '../../api/signup'

export default () => {
  const [ errors, setErrors ] = useState(null)
  const [ name, setName ] = useState('')
  const [ cpf, setCpf ] = useState('')
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')

  const handleNameChange = ({ currentTarget: { value }}) => setName(value)
  const handleCpfChange = ({ currentTarget: { value }}) => setCpf(value)
  const handleEmailChange = ({ currentTarget: { value }}) => setEmail(value)
  const handlePasswordChange = ({ currentTarget: { value }}) => setPassword(value)

  const handleSubmit = async (e) => {
    e.preventDefault()

    const resp = await createUser({
      name, cpf, email, password
    })

    if (resp.error) {
      setErrors(resp.error)
    } else {
      setErrors(null)
      // TODO: levar para a dashboard como logado
    }
  }

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col>
          <h1>Cadastro</h1>
          <Form noValidate onSubmit={handleSubmit}>
            <Form.Row>

              <Form.Group as={Col} lg="6">
                <Form.Label>Nome completo</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  onChange={handleNameChange}
                  isInvalid={errors && errors.name}
                />
                <Form.Control.Feedback type="invalid">
                  {errors && errors.name}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} lg="6">
                <Form.Label>CPF</Form.Label>
                <Form.Control
                  type="text"
                  name="cpf"
                  onChange={handleCpfChange}
                  isInvalid={errors && errors.cpf}
                />
                <Form.Control.Feedback type="invalid">
                  {errors && errors.cpf}
                </Form.Control.Feedback>
              </Form.Group>

            </Form.Row>
            <Form.Row>

              <Form.Group as={Col} lg="6">
                <Form.Label>E-mail</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  onChange={handleEmailChange}
                  isInvalid={errors && errors.email}
                />
                <Form.Control.Feedback type="invalid">
                  {errors && errors.email}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} lg="6">
                <Form.Label>Senha</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  onChange={handlePasswordChange}
                  isInvalid={errors && errors.password}
                />
                <Form.Control.Feedback type="invalid">
                  {errors && errors.password}
                </Form.Control.Feedback>
              </Form.Group>

            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} lg={{span: 3, offset:6}}>
                <Button variant="primary" type="submit" block>
                  Cadastrar
                </Button>
              </Form.Group>
              <Form.Group as={Col} lg={{span: 3}}>
                <Button as={Link} to="/" variant="outline-primary" block>
                  Voltar
                </Button>
              </Form.Group>
            </Form.Row>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}