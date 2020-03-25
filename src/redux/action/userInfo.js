import { getCoderName } from '../../service'

const USER_INFO = 'USER_INFO'

export const saveUserInfo = userInfo => ({
  type: USER_INFO,
  userInfo,
})


export const getInfo = subreddit => async dispatch => {
  // dispatch({
  //   type: 'FETCH_SEND',
  //   subreddit,
  //   loading: true,
  // })

  const { data } = await getCoderName()
  dispatch({
    type: 'FETCH_COMPLETED',
    subreddit,
    data,
    loading: false,
  })
}
