import Joi from '@hapi/joi'
import axios from './_config'
import { getAuth } from './common'
import { simplifyErrorObj } from './common'

const PRIVATE = true

const orderSchema = Joi.object({
  userId: Joi.number().integer().positive().required(),
  total: Joi.number().positive().precision(2).required(),
  //creditUsed: Joi.number.positive().precision(2).required(),
  //creditEarned: Joi.number.positive().precision(2).required(),
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

  const order = { ..._order, userId }
  const { error, value } = orderSchema.validate(order, { abortEarly: false })

  if (error) {
    return { error: simplifyErrorObj(error) }
  }

  return await axios(PRIVATE).post('/orders', value)
}
