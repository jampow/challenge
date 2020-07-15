import axios from './_config'
import { getAuth } from './common'

const PRIVATE = true

export const getUserAndOrders = async () => {
  const userId = getAuth().sub

  return  await axios(PRIVATE).get(`/users/${userId}?_embed=orders`)
}

