import axios from 'axios'
import { getToken } from './common'

const getConfig = (priv = false) => {
  const def = {
    baseURL: process.env.REACT_APP_BACKEND_ADDRESS || 'http://localhost:5000/'
  }

  if(priv) {
    const token = getToken()
    return {
      ...def,
      headers: {
        authorization: 'Bearer ' + token
      }
    }
  }

  return def
}

const myAxios = priv => axios.create(getConfig(priv))

export default myAxios