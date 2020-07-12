import React, { useState } from 'react'
import {
  Container,
  Col,
  Form,
  Row,
  Table
} from 'react-bootstrap'
import SearchBar from './SearchBar'

export default () => {
  const [ cartItems, setCartItems ] = useState([])

  const handleSelectItem = ([ option ]) => {
    if (!option) return 

    const item = {
      ...option,
      quantity: 1,
      total: option.price
    }

    const newCart = cartItems.concat([ item ]) 
    setCartItems(newCart)
  }

  const currencyFormat = n => new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL'}).format(n)

  const cartTotal = () => cartItems.reduce((acc, item) => acc + item.total, 0)

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col>
          <h1>Novo pedido</h1>
          <Form>
            <Form.Group as={Col}>
              <Form.Label>Busque o produto</Form.Label>
              <SearchBar onChange={handleSelectItem} />
            </Form.Group>
            <Table responsive>
              <thead className="text-center">
                <tr>
                  <th rowspan="2">Item</th>
                  <th rowspan="2">Qtd</th>
                  <th colspan="2">Preço</th>
                </tr>
                <tr>
                  <th>Unitário</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map(item => (
                  <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.quantity}</td>
                    <td className="text-right">{currencyFormat(item.price)}</td>
                    <td className="text-right">{currencyFormat(item.total)}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="text-right">
                  <th colspan="3">Total:</th>
                  <th>{currencyFormat(cartTotal())}</th>
                </tr>
              </tfoot>
            </Table>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}
