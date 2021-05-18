import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api-trick.cloud.zukt.com.br'
})
export default api
