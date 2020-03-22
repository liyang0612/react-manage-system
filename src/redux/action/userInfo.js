import request from '../../request'

const USER_INFO = 'USER_INFO'

export const saveUserInfo = userInfo => ({
  type: USER_INFO,
  userInfo,
})

const fetchSend = subreddit => ({
  type: 'FETCH_SEND',
  subreddit,
  loading: true,
})

const featchCompleted = (subreddit, data) => ({
  type: 'FETCH_COMPLETED',
  subreddit,
  data,
  loading: false,
})

export const getInfo = subreddit => async dispatch => {
  dispatch(fetchSend(subreddit))
  const data = await request('/api/getName')
  console.log(data)
  // const data = request('/graphql')
  // dispatch(featchCompleted(subreddit, data))
}
