import fetch from "cross-fetch"

const request = async (url, params, options) => {
  const headers = {
    ...options,
    Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoibGl5YW5nIiwiX2lkIjoiMSIsImlhdCI6MTU4NDg5MDYyMCwiZXhwIjoxNTg0ODk0MjIwfQ.a78zQnecPRVNRthJMXyJCXz0OuzLRdgwFZbDlBN4vyc"
  }
  const response = await fetch(url, {
    headers
  })
  const { status, statusText } = response
  
  const data = {
    status,
    statusText,
  }
  switch(status) {
    case 401: 
      alert('请登录')
      break
    default: 
      data.data = await response.json()
      break
  }
  return data
}

export default request