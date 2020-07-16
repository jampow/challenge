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
import { getUserAndOrders } from '../../api/user'
import { date, currency } from '../../common/helpers/formaters'
import { sumCashback } from '../../common/helpers/cashback'

export default () => {
  const [ orders, setOrders ] = useState([])
  const [ name, setName ] = useState('')
  const [ loading, setLoading ] = useState(true)
  const [ credit, setCredit ] = useState(0)
  const { state } = useLocation()

  useEffect(() => {
    getUserAndOrders()
      .then(({ data }) => {
        const { name, orders } = data
        setName(name)
        setOrders(orders)
        setCredit(sumCashback(orders))
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
            <ListGroup.Item>
              Olá {name}, você tem {currency(credit)} em crédito acumulado
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
      <Row>
        <Col>
          <ListGroup className="mt-3">
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
                    <Col xs="6" md="3" lg="3">({(order.cashbackPerc * 100) || 0}%) {currency(order.creditEarned)}</Col>

                    <Col xs="6" md="3" lg="1"><strong>Status:</strong></Col>
                    <Col xs="6" md="3" lg="3">{order.status}</Col>
                  </Row>
                </ListGroup.Item>
              ))
            }
          </ListGroup>
        </Col>
      </Row>

      <Row className="mt-3">
        <Col className="text-right">
    <Button as={Link} to={{ pathname: '/create-order', state: { creditEarned: credit }}}>
            Novo pedido
          </Button>
        </Col>

      </Row>
    </Container>
  )
}
