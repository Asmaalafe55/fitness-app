import axios from 'axios'
import router from 'next/router'

const instance = axios.create({
  baseURL: `${process.env.API_URL}/api`,
  withCredentials: true
})

instance.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    if (error.response.status === 401) {
      router.push('/auth/login')
    }
    return Promise.reject(error)
  }
)
