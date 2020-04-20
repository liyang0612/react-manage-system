const router = require('koa-router')()
const { sign } = require('jsonwebtoken')
const querySql = require('../connection').querySql

router.post('/login', async function(ctx) {
  const data = ctx.request.body
  console.log(data)
  if (!data.username || !data.password) {
    ctx.body = '参数不合法'
    return
  }

  const userInfo = await querySql(`SELECT * FROM mysql_test.user WHERE username='${data.username}'&&'${data.password}'`)
  if (!userInfo.length) {
    ctx.body = {
      status: 200,
      message: '用户名或密码不正确'
    }
  } else {
    const token = sign({
      name: data.userName,
      _id: '1'
    }, 'my-secret', {expiresIn: '1h'})
  
    ctx.body = {
      code: 200,
      token: 'Bearer ' + token,
      message: '登录成功'
    }
  }
})

router.get('/api/getName', async function(ctx, err) {
  let data = null
  ctx.set('Content-type','application/json')

  await querySql('SELECT * FROM mysql_test.coder').then(res => {
    ctx.body = JSON.stringify(res)
  }).catch(err => {
    ctx.body = err
  })

})

router.get('/api/getMenu', async function(ctx, err) {
  ctx.body = {
    msg: 'ok',
    data: [
      {
        name: '首页',
        path: '/home',
        id: '1',
        parentId: 0
      }, {
        name: '个人中心',
        path: '/me',
        id: '2',
        parentId: 0,
        children: [{
          name: '设置',
          path: '/setting',
          parentId: '2',
          id: '2-1'
        }, {
          nmae: '个人信息',
          path: '/info',
          parentId: '2',
          id: '2-2'
        }]
      }, {
        name: '抽奖中心',
        id: '3',
        path: '/luckDraw',
        parentId: 0
      }
    ]
  }
})

module.exports = router
