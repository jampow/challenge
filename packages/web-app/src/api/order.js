import Joi from '@hapi/joi'
import axios from './_config'
import { getAuth } from './common'
import { simplifyErrorObj } from './common'
import { calculateCashback } from './cashback'
import { applyCashback } from '../common/helpers/cashback'

const PRIVATE = true

export const STATUS = {
  WAITING: 'waiting',
  APPROVED: 'approved',
  REPROVED: 'reproved'
}

const orderSchema = Joi.object({
  userId: Joi.number().integer().positive().required(),
  subtotal: Joi.number().min(0).precision(2).required(),
  total: Joi.number().min(0).precision(2).required(),
  status: Joi.string().valid(...Object.values(STATUS)),
  creditUsed: Joi.number().min(0).precision(2).required(),
  cashbackPerc: Joi.number().positive().precision(2).required(),
  creditEarned: Joi.number().min(0).precision(2).required(),
  items: Joi.array().min(1).items(
    Joi.object({
      id: Joi.number().required(),
      name: Joi.string().required(),
      code: Joi.string().pattern(/^[0-9]+$/, 'numbers').required(),
      quantity: Joi.number().integer().positive().min(1).required(),
      price: Joi.number().positive().precision(2).required(),
      total: Joi.number().positive().precision(2).required()
    })
  )
})

export const getOrders = async () => {
  const userId = getAuth().sub

  return  await axios(PRIVATE).get(`/users/${userId}/orders`)
}

export const createOrder = async (_order) => {
  const userId = getAuth().sub

  const cbUsage = applyCashback(_order.total, _order.cashback)

  const cb = await calculateCashback(cbUsage.total)

  const order = {
    items: _order.items,
    // OBS: Não colocaria esses dados, o ideal seria colocar no backend
    userId,
    creditUsed: _order.cashback,
    subtotal: _order.total,
    total: cbUsage.total,
    creditEarned: cb.value,
    cashbackPerc: cb.perc,
    status: STATUS.WAITING
  }

  const { error, value } = orderSchema.validate(order, { abortEarly: false })

  if (error) {
    return { error: simplifyErrorObj(error) }
  }

  return await axios(PRIVATE).post('/orders', value)
}
