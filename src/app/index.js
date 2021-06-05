const koa=require('koa')
const bodyparser=require('koa-bodyparser')
const errhandle=require('./errorHandle')
const userRouter=require('../router/index')

const app=new koa()
app.use(bodyparser())
userRouter(app)
app.on('error',errhandle)
module.exports=app