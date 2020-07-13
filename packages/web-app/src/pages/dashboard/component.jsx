import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  Button,
  Spinner,
  Table
} from 'react-bootstrap'
import { getOrders } from '../../api/order'

export default () => {
  const [ orders, setOrders ] = useState([])
  const [ loading, setLoading ] = useState(true)

  useEffect(() => {
    getOrders()
      .then(({ data }) => {
        setOrders(data)
        setLoading(false)
      })

    return () => setOrders([])
  }, [true])

  return (
    <>
      <h1>Dashboard</h1>
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
