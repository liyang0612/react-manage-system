import { getMenu } from '../../service'

export const getMenuData = () => (async dispatch => {
  const { data } = await getMenu()
  dispatch({
    type: 'GET_MENU_SUCCESS',
    data
  })
})