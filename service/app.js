const { ApolloServer, gql } = require('apollo-server-koa')
const jwt = require('koa-jwt')
const bodyparser = require('koa-bodyparser');
const Koa = require('koa')

const router = require('./router')

const typeDefs = gql` 
  type Book {
    bookName: String
  }
  type Query { 
    getBooks: Book
    length(unit: String): String
  } `

const resolvers = { Query: { getBooks: (parent, args, context, info) => {
    return context
  }, length: async (parent, args, context) => {
    return '1231' + context.unit
  } },
  Book: {
    bookName: () => 'JavaScript权威指南'
  }
 }
 
const server = new ApolloServer({ typeDefs, resolvers })
const app = new Koa()

// 验证token
app.use(async function (ctx, next) {
  return next().catch(err => {
    if (err.status === 401) {
      ctx.status = 401;
      ctx.body = 'use Authorization header to get access'
    } else {
      throw err
    }
  })
})
// 调用jwt中间件
app.use(jwt({ secret: 'my-secret' }).unless({
  path:[/^\/login/]
}))


app.use((bodyparser()))
// 加入路由
app.use(router.routes())


server.applyMiddleware({
  app
})

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`),
);