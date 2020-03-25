import { combineReducers } from 'redux'

export const userInfo = (state = { userInfo: {} }, action) => {
  switch (action.type) {
    case 'SAVE_USER_INFO':
      return { ...state, userInfo: action.userInfo }
    case 'FETCH_COMPLETED':
      return { ...state, userInfo: action.data }
    default:
      return state
  }
}

export const coderInfo = (state = { coder: {} }, action) => {
  switch (action.type) {
    case 'SAVE_USER_INFO':
      return { ...state, coder: action.userInfo }
    case 'FETCH_COMPLETED':
      return { ...state, coder: action.data }
    default:
      return state
  }
}

export default combineReducers({
  userInfo,
  coderInfo
})


