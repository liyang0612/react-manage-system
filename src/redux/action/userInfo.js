const USER_INFO = 'USER_INFO'

export const saveUserInfo = userInfo => {
  return {
    type: USER_INFO,
    userInfo,
  }
}

const fetchSend = subreddit => {
  return {
    type: 'FETCH_SEND',
    subreddit,
    loading: true,
  }
}

const featchCompleted = (subreddit, data) => {
  return {
    type: 'FETCH_COMPLETED',
    subreddit,
    data,
    loading: false,
  }
}

export const getInfo = subreddit => {
  return function(dispatch) {
    dispatch(fetchSend(subreddit))
    fetch(' https://cnodejs.org/api/v1/topics').then(res => {
      dispatch(featchCompleted(subreddit, res))
    })
  }
}
