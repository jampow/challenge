import React from 'react'
import { Link } from 'react-router-dom'
import {
  Button
} from 'react-bootstrap'

export default () => {
  return (
    <Button as={Link} to="/create-order">
      Novo pedido
    </Button>
  )
}