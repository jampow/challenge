import React, { useState } from 'react'
import {
  Container,
  Col,
  Form,
  Row,
  Table
} from 'react-bootstrap'
import SearchBar from './SearchBar'
import EditModal from './EditItem'
import currency from '../../common/currency'

export default () => {
  const [ cartItems, setCartItems ] = useState([])
  const [ editingItem, setEditingItem ] = useState({})

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

  const cartTotal = () => cartItems.reduce((acc, item) => acc + item.total, 0)

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

  return (
    <>
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
                    <th colSpan="3">Total:</th>
                    <th>{currency(cartTotal())}</th>
                  </tr>
                </tfoot>
              </Table>
            </Form>
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
