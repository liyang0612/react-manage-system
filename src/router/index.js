import Home from '../views/index'
import Login from '../layout/Login'

export default [
  {
    path: '/',
    name: '首页',
    component: Home,
    routes: [],
  },
  {
    path: 'login',
    name: '登录',
    component: Login,
  },
]
