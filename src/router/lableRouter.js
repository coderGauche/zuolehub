const Router=require('koa-router')
const lableRouter=new Router({prefix:'/lable'})
const{
    create,
    list
}=require('../controller/lableController')
const {
    verifyAuth,
}=require('../moddleware/authModdleware')
lableRouter.post('/',verifyAuth,create)
lableRouter.get('/', list);
module.exports=lableRouter 