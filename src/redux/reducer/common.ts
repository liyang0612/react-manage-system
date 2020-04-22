import { Action } from 'redux'
import * as types from '../type'

export interface ActionMenuType extends Action {
  data: any
}

export function menu(state, action: ActionMenuType) {
  const menuData = action.data || []
  const firstItem = menuData[0] || {}
  const slideMenu = firstItem.children || []
  switch(action.type) {
    case types.GET_MENU_SUCCESS: 
      return { 
        ...state, 
        menuData, 
        slideMenu,
        currentId: slideMenu[0] && slideMenu[0].id
      }
    case types.GET_CURRENT_MENU:
      // eslint-disable-next-line no-case-declarations
      let currentMenu = []
      state.menuData.forEach(item => {
        if (item.id === action.data) {
          currentMenu = item.children || []
        }
      })
      return {
        ...state,
        slideMenu: currentMenu,
        currentId: currentMenu[0] && currentMenu[0].id
      }
    default :
      return { ...state }
  }
}