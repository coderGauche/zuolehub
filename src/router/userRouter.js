const router=require('koa-router')
const {
    create,
    avatarInfo
} =require('../controller/userController')
const {
    verifyUser,
    handlePassword
}=require('../moddleware/userModdleware')
const userRouter=new router({prefix:'/users'})
userRouter.post('/',verifyUser,handlePassword,create)   //verifyUser验证  中间件
userRouter.get('/:userId/avatar', avatarInfo);

module.exports=userRouter