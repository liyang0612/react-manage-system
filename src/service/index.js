import request from '../request'

export const getCoderName = async params => {
  const data = await request('/api/getName')
  return data
}

export const getMenu = async params => {
  const data = await request('/api/getMenu')
  return data
}

export const login = async params => {
  const data = await request('/login', {
    method: 'POST', // or 'PUT'
    body: JSON.stringify(params), // data can be `string` or {object}!
    headers: {
      'Content-Type': 'application/json'
    }
  })
  return data
}