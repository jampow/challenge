import React, { useState, useEffect } from 'react'
import {
  Button,
  Col,
  Form,
  Modal,
  Row
} from 'react-bootstrap'
import currency from '../../common/currency'

export default ({
  item,
  onDelete = () => {},
  onHide = () => {},
  onSave = () => {},
  show
}) => {
  const { name, price } = item
  const [ quantity, setQuantity ] = useState(item.quantity)
  const [ total, setTotal ] = useState(item.total)
  const [ showConfirm, setShowConfirm ] = useState(false)

  const handleQuantityChange = ({ currentTarget: { value }}) => setQuantity(value)
  const handleSave = () => {
    const cartItem = {
      ...item,
      quantity,
      total
    }

    onSave(cartItem)
  }

  const handleDelete = () => {
    setShowConfirm(false)
    onDelete(item.id)
  }

  const askForConfirmation = () => setShowConfirm(true)

  const closeConfirmation = () => setShowConfirm(false)

  useEffect(() => setTotal(quantity * price), [quantity, price])

  return (
    <>
      <Modal
        show={show}
        onHide={onHide}
      >
        <Modal.Header closeButton>Editando item do carrinho</Modal.Header>

        <Form as={Modal.Body}>
          <Form.Group as={Row}>
            <Form.Label column>Produto</Form.Label>
            <Col>
              <Form.Control plaintext readOnly defaultValue={name} />
            </Col>
          </Form.Group>

          <Form.Group as={Row}>
            <Form.Label column>Quantidade</Form.Label>
            <Col>
              <Form.Control
                type="number"
                onChange={handleQuantityChange}
                defaultValue={item.quantity}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row}>
            <Form.Label column>Preço</Form.Label>
            <Col>
              <Form.Control plaintext readOnly defaultValue={currency(price)} />
            </Col>
          </Form.Group>

          <Form.Group as={Row}>
            <Form.Label column>Total</Form.Label>
            <Col>
              <Form.Control plaintext readOnly value={currency(total)} />
            </Col>
          </Form.Group>
        </Form>

        <Modal.Footer>
          <Button variant="danger" onClick={askForConfirmation}>Remover</Button>
          <Button variant="primary" onClick={handleSave}>Salvar</Button>
        </Modal.Footer>
      </Modal>
      <Modal show={showConfirm} onHide={closeConfirmation}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>Confirma a remoção deste item do carrinho?</Modal.Body>
        <Modal.Footer>
          <Button onClick={handleDelete} variant="danger">Sim</Button>
          <Button onClick={closeConfirmation}>Não</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
