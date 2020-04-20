import { ResponseTypes } from 'src/request'
import { getMenu } from '../../service'
import * as types from '../type'

export const getMenuData = () => (async dispatch => {
  const { data }: ResponseTypes = await getMenu()
  dispatch({
    type: types.GET_MENU_SUCCESS,
    data
  })
})

export const getCurrentMenu = (id: string) => ({
  type: types.GET_CURRENT_MENU,
  data: id
})