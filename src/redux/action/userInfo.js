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
  // const data = await fetch(' https://cnodejs.org/api/v1/topics')
  // const data = await fetch(' http://localhost:4000/api/getNames')
  // console.log(data)
  // dispatch(featchCompleted(subreddit, data))
  fetch(' http://localhost:4000/api/getNames')
    .then(res => {
      console.log(res)
    })
    .catch(err => {
      console.log(err)
    })
}
