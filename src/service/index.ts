import request from '../request'

export const getCoderName = async () => {
  const data = await request('/api/getName')
  return data
}

export const getMenu = async () => {
  const data = await request('/api/getMenu')
  if (!data.data) {
    return {
      data: [],
      msg: 'fail'
    }
  }
  return data
}

export interface LoginParamsType {
  username: String;
  password: String
}

export const login = async (params: LoginParamsType) => {
  const data = await request('/login', {
    method: 'POST', // or 'PUT'
    body: JSON.stringify(params), // data can be `string` or {object}!
    headers: {
      'Content-Type': 'application/json'
    }
  })
  return data
}