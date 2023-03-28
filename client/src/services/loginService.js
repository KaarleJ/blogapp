import axios from 'axios'
const baseUrl = '/api/login'

const loginService = async ({ username, password }) => {
  const response = await axios.post(baseUrl, { username, password })
  return response.data
}
export default loginService