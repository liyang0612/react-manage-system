export function menu(state, action) {
  switch(action.type) {
    case 'GET_MENU_SUCCESS': 
      return { ...state, menu: action.data }
    default :
      return { ...state }
  }
}