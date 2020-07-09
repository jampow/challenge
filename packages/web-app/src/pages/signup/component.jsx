import React from 'react'
import {
  Container,
  Row,
  Col,
  Form,
  Button
} from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default () => (
  <Container>
    <Row className="justify-content-md-center">
      <Col>
        <h1>Cadastro</h1>
        <Form>
          <Row>
            <Col lg="6">
              <Form.Group>
                <Form.Label>Nome completo</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
            </Col>
            <Col lg="6">
              <Form.Group>
                <Form.Label>CPF</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col lg="6">
              <Form.Group>
                <Form.Label>E-mail</Form.Label>
                <Form.Control type="email" />
              </Form.Group>
            </Col>
            <Col lg="6">
              <Form.Group>
                <Form.Label>Senha</Form.Label>
                <Form.Control type="password" />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col lg={{span: 3, offset:6}}>
              <Form.Group>
                <Button variant="primary" type="submit" block>
                  Cadastrar
                </Button>
              </Form.Group>
            </Col>
            <Col lg={{span: 3}}>
              <Form.Group>
                <Button as={Link} to="/" variant="outline-primary" block>
                  Voltar
                </Button>
              </Form.Group>
            </Col>
          </Row>
        </Form>
      </Col>
    </Row>
  </Container>
)