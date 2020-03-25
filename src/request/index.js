import fetch from "cross-fetch"
import { message } from "antd"

const request = async (url, options = {}) => {
  const headers = {
    ...options,
    headers: {
      ...options.headers,
      Authorization: window.localStorage.getItem('token')
    }
  }
  const response = await fetch(url, headers)
  const { status, statusText } = response
  
  const data = {
    status,
    statusText,
  }
  switch(status) {
    case 401: 
      message.error('请先登录')
      // window.location.href = '/login'
      break
    default: 
      try {
        data.data = await response.json()
      } catch(err) {
        data.data = {}
      }
      break
  }
  return data
}

export default request