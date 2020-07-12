import React, { useState } from 'react'
import {
  Button,
  Container,
  Col,
  Form,
  Row,
  Table
} from 'react-bootstrap'
import { AsyncTypeahead } from 'react-bootstrap-typeahead'
import { debounce } from 'throttle-debounce'
import { searchProduct } from '../../api/order'

const DEBOUNCE_TIMEOUT = 500

export default () => {
  const [ cartItems, setCartItems ] = useState([])
  const [ options, setOptions ] = useState([])
  const [ loading, setLoading ] = useState(false)

  const debouncedSeach = debounce(DEBOUNCE_TIMEOUT, async (query) => {
    const { data } = await searchProduct(query)
    setOptions(data)
    setLoading(false)
  })

  const handleQuerySearch = value => {
    setLoading(true)
    debouncedSeach(value)
  }

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

  const labelKeyFormater = ({ code, name, price}) => `${code} - ${name} - ${price}`

  const currencyFormat = n => new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL'}).format(n)

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col>
          <h1>Novo pedido</h1>
          <Form>
            <Form.Group as={Col}>
              <Form.Label>Busque o produto</Form.Label>
              <AsyncTypeahead
                id="searchQueryInput"
                isLoading={loading}
                minLength={2}
                labelKey={labelKeyFormater}
                onSearch={handleQuerySearch}
                options={options}
                onChange={handleSelectItem}
              />
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
                  <th>{currencyFormat(234324)}</th>
                </tr>
              </tfoot>
            </Table>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}
