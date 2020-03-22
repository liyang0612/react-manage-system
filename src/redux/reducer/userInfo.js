export const userInfo = (state = { test: 234234 }, action) => {
  switch (action.type) {
    case 'SAVE_USER_INFO':
      return { ...state, userInfo: action.userInfo }
    case 'FETCH_COMPLETED':
      return { ...state, userInfo: action.data }
    default:
      return state
  }
}
