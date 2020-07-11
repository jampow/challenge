import axios from 'axios'

const myAxios = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_ADDRESS || 'http://localhost:5000/'
})

export default myAxios