import { Dispatch } from 'redux'
import { getCoderName } from 'src/service'

const USER_INFO = 'USER_INFO'

interface userInfoAction {
  type: String;
  userInfo: any;
}

export const saveUserInfo = (userInfo: userInfoAction) => ({
  type: USER_INFO,
  userInfo,
})

export const getInfo = (subreddit?: any) => async (dispatch: Dispatch<any>) => {
  const data = await getCoderName()
  dispatch({
    type: 'FETCH_COMPLETED',
    subreddit,
    data,
    loading: false,
  })
}
