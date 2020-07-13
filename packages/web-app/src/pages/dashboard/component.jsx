import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import {
  Alert,
  Button,
  Spinner
} from 'react-bootstrap'
import { getOrders } from '../../api/order'

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
    <>
      <h1>Dashboard</h1>
      {state && state.success &&
        <Alert variant="success">
          Pedido cadastrado
        </Alert>
      }
      {loading 
        ? <Spinner animation="grow" /> 
        : orders.map(order => (
          <div key={order.id}>{order.id}</div>
        ))
      }
      <Button as={Link} to="/create-order">
        Novo pedido
      </Button>
    </>
  )
}
