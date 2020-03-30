import { combineReducers } from 'redux'

interface userInfoObj {
  id?: Number;
  name?: String;
}

interface coderObj {
  id?: Number;
  name?: String;
}

interface userInfoState {
  userInfo?: userInfoObj;
  coder?: coderObj
}

export const userInfo = (state: userInfoState = { userInfo: {} }, action: any) => {
  switch (action.type) {
    case 'SAVE_USER_INFO':
      return { ...state, userInfo: action.userInfo }
    case 'FETCH_COMPLETED':
      return { ...state, userInfo: action.data }
    default:
      return state
  }
}

export const coderInfo = (state: userInfoState = { coder: {} }, action: any) => {
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


