import axios from './_config'

const PRIVATE = true

export const searchProduct = (query) => {
  const params = { q: query }
  return axios(PRIVATE).get('/products', { params })
}
