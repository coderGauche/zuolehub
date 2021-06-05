const Rouer=require('koa-router')
const commentRouter=new Rouer({prefix:'/comment'})
const{
    verifyAuth,
    verifypermission
}=require('../moddleware/authModdleware')
const{
    create,
    reply, 
    update,
    del,
    list,
}=require('../controller/commentController')
commentRouter.post('/',verifyAuth,create)
commentRouter.post('/:commentId/reply',verifyAuth,reply)
commentRouter.patch('/:commentId',verifyAuth,verifypermission,update) 
commentRouter.delete('/:commentId',verifyAuth,verifypermission,del) 
commentRouter.get('/',list) 
module.exports=commentRouter 