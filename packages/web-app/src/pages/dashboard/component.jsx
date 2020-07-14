import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import {
  Alert,
  Button,
  Col,
  Container,
  ListGroup,
  Row,
  Spinner
} from 'react-bootstrap'
import { getOrders } from '../../api/order'
import { date, currency } from '../../common/helpers/formaters'

export default () => {
  const [ orders, setOrders ] = useState([])
  const [ loading, setLoading ] = useState(true)
  const { state } = useLocation()

  useEffect(() => {
    getOrders()
      .then(({ data }) => {
        setOrders(data)
        setLoading(false)
      })

    return () => setOrders([])
  }, [])

  return (
    <Container>
      <Row>
        <Col>

          <h1>Dashboard</h1>

          {state && state.success &&
            <Alert variant="success">
              Pedido cadastrado
            </Alert>
          }

        </Col>
      </Row>
      <Row>
        <Col>
          <ListGroup>
            {loading 
              ? <Spinner animation="border" variant="primary" />
              : orders.map(order => (
                <ListGroup.Item key={order.id}>
                  <Row>
                    <Col xs="6" md="3" lg="1"><strong>Pedido:</strong></Col>
                    <Col xs="6" md="3" lg="3">{order.id}</Col>

                    <Col xs="6" md="3" lg="1"><strong>Data:</strong></Col>
                    <Col xs="6" md="3" lg="3">{date(order.createdAt)}</Col>

                    <Col xs="6" md="3" lg="1"><strong>Valor:</strong></Col>
                    <Col xs="6" md="3" lg="3">{currency(order.total)}</Col>

                    <Col xs="6" md="3" lg="1"><strong>Cachback:</strong></Col>
                    <Col xs="6" md="3" lg="3">({(order.cashbackPerc * 100) || 0}%) {currency(order.cashbackValue)}</Col>

                    <Col xs="6" md="3" lg="1"><strong>Status:</strong></Col>
                    <Col xs="6" md="3" lg="3">{order.status}</Col>
                  </Row>
                </ListGroup.Item>
              ))
            }
          </ListGroup>
        <Col>

        </Col>
          <Button as={Link} to="/create-order">
            Novo pedido
          </Button>
        </Col>

      </Row>
    </Container>
  )
}
