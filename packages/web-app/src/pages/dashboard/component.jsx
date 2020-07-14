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
import currency from '../../common/currency'

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

          <ListGroup>
            {loading 
              ? <Spinner animation="border" variant="primary" />
              : orders.map(order => (
                <ListGroup.Item key={order.id}>
                  <Row>
                    <Col xs={12}>
                      <strong>Pedido Nº:</strong> {order.id}
                    </Col>
                    <Col xs={12}>
                      <strong>Data:</strong> {order.createdAt}
                    </Col>
                    <Col xs={12}>
                      <strong>Valor:</strong> {currency(order.total)}
                    </Col>
                    <Col xs={12}>
                      <strong>Cachback:</strong> ({order.cbPercentage || 0}%) {currency(order.cbTotal)}
                    </Col>
                    <Col xs={12}>
                      <strong>Status:</strong> {order.status}
                    </Col>
                  </Row>
                </ListGroup.Item>
              ))
            }
          </ListGroup>

          <Button as={Link} to="/create-order">
            Novo pedido
          </Button>
        </Col>

      </Row>
    </Container>
  )
}
