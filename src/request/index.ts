import fetch from "cross-fetch"
import { message } from "antd"

export interface ResponseTypes {
  data?: any;
  msg?: string;
}

const request = async (url, options: any = {}) => {
  const headers = {
    ...options,
    headers: {
      ...options.headers,
      Authorization: window.localStorage.getItem('token')
    }
  }
  const response = await fetch(url, headers)
  const { status } = response
  let data: ResponseTypes = {}
  switch(status) {
    case 401: 
      message.error('请先登录', 2, () => {
        window.location.href = `/login?form=${encodeURIComponent(window.location.href)}`
      })
      localStorage.clear()
      break
    case 500:
      message.error('服务器错误，请稍后重试')
      break
    default: 
      try {
        data = await response.json()
      } catch(err) {
        data = {}
      }
      break
  }
  return data
}

export default request