import axios from './_config'
import { getAuth } from './common'

const PRIVATE = true

export const getOrders = async () => {
  const userId = getAuth().sub
  const resp = await axios(PRIVATE).get(`/users/${userId}/orders`)
  return resp
}
