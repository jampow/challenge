import React, { useState, useEffect } from 'react'
import {
  Alert,
  Button,
  Container,
  Col,
  Form,
  Row,
  Table
} from 'react-bootstrap'
import { useHistory, useLocation } from 'react-router-dom'
import SearchBar from './SearchBar'
import EditModal from './EditItem'
import { currency } from '../../common/helpers/formaters'
import { createOrder } from '../../api/order'
import { applyCashback } from '../../common/helpers/cashback'

export default () => {
  const history = useHistory()
  const location = useLocation()

  const [ cashback, setCashback ] = useState(0)
  const [ remainingCashback, setRemainingCashback ] = useState(0)
  const [ subtotal, setSubtotal ] = useState(0)
  const [ total, setTotal ] = useState(0)
  const [ cartItems, setCartItems ] = useState([])
  const [ editingItem, setEditingItem ] = useState({})
  const [ error, setError ] = useState('')

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

  useEffect(() => {
    setCashback(location.state && location.state.cashback)
  }, [location.state])

  useEffect(() => {
    const subtot = cartItems.reduce((acc, item) => acc + item.total, 0)
    setSubtotal(subtot)
    const cashbUsed = applyCashback(subtot, cashback)
    setTotal(cashbUsed.total)
    setRemainingCashback(cashbUsed.cashback)

  }, [cartItems, cashback])

  const handleItemEdition = (editedItem) => {
    setCartItems(
      cartItems.map(item => {
        if (item.id === editedItem.id) {
          return { ...editedItem }
        }

        return item
      })
    )
    setEditingItem({})
  }

  const handleItemDeletion = id => {
    setCartItems(
      cartItems.filter(item => item.id !== id)
    )
    setEditingItem({})
  }

  const handleItemCancelEdition = () => setEditingItem({})

  const showModal = () => Object.keys(editingItem).length > 0

  const handleItemClick = item => () => {
    setEditingItem(item)
  }

  const handleSaveOrder = async () => {
    const order = {
      total,
      cashback,
      items: cartItems
    }

    const resp = await createOrder(order)

    if (resp.status === 201) {
      history.push({
        pathname: '/dashboard',
        state: { success: true }
      })
    } else {
      setError('Não foi possível efetuar o pedido')
    }
  }

  return (
    <>
      <Container>
        <Row className="justify-content-md-center">
          <Col>
            <h1>Novo pedido</h1>
            {error && (<Alert variant="danger">{error}</Alert>)}
            <Form>
              <Form.Group as={Col}>
                <Form.Label>Busque o produto</Form.Label>
                <SearchBar onChange={handleSelectItem} />
              </Form.Group>
              { cartItems.length > 0 && (
                <Table responsive>
                  <thead className="text-center">
                    <tr>
                      <th rowSpan="2">Item</th>
                      <th rowSpan="2">Qtd</th>
                      <th colSpan="2">Preço</th>
                    </tr>
                    <tr>
                      <th>Unitário</th>
                      <th>Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map(item => (
                      <tr key={item.id} onClick={handleItemClick(item)}>
                        <td>{item.name}</td>
                        <td>{item.quantity}</td>
                        <td className="text-right">{currency(item.price)}</td>
                        <td className="text-right">{currency(item.total)}</td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot>
                    <tr className="text-right">
                      <th colSpan="3">Subtotal:</th>
                      <th>{currency(subtotal)}</th>
                    </tr>
                    <tr className="text-right">
                      <th colSpan="3">Cashback:</th>
                      <th>{currency(cashback)}</th>
                    </tr>
                    <tr className="text-right">
                      <th colSpan="3">Total:</th>
                      <th>{currency(total)}</th>
                    </tr>
                    <tr className="text-right">
                      <th colSpan="3">Cashback restante:</th>
                      <th>{currency(remainingCashback)}</th>
                    </tr>
                  </tfoot>
                </Table>
              )}
            </Form>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button onClick={handleSaveOrder}>Salvar</Button>
          </Col>
        </Row>
      </Container>
      <EditModal
        item={editingItem}
        onDelete={handleItemDeletion}
        onHide={handleItemCancelEdition}
        onSave={handleItemEdition}
        show={showModal()}
      />
    </>
  )
}
