import Login from '../views/Login'
import Home from '../views'
import Setting from '../views/Setting'

export default [
  {
    path: '/',
    name: '首页',
    routes: [{
      path: '/home',
      name: '首页',
      component: Home,
    }, {
      path: '/setting',
      name: '设置',
      component: Setting,
    }],
  },
  {
    path: 'login',
    name: '登录',
    component: Login,
  },
]
