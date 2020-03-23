import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import ConfigProvider from 'antd/lib/config-provider'
import zhCN from 'antd/es/locale/zh_CN'
import MsRouter from './router'
import reducer from './redux/reducer'
import 'antd/dist/antd.css'
import './assets/styles/common.scss'

import * as serviceWorker from './serviceWorker'

const store = createStore(reducer, applyMiddleware(thunkMiddleware))

ReactDOM.render(
  <ConfigProvider locale={zhCN}>
    <Provider store={store}>
      <MsRouter />
    </Provider>
  </ConfigProvider>,
  document.getElementById('root'),
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
