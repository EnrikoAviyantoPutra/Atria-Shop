import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://e-commerce-cms-helsinki-fox.herokuapp.com'
})

export default instance
