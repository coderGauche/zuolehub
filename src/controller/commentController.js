const commentserver=require('../service/commentserver')
class commentController{
    async create(ctx,next){
        const {moment_id,content}=ctx.request.body
        const user_id=ctx.user.id
        console.log(moment_id);
        console.log(user_id);
        console.log(content);
        const result=await commentserver.create(moment_id,content,user_id)
        console.log(result);
        ctx.body={
            code:200,
            msg:'评论成功'
        }
    }
    async reply(ctx,next){
        const {moment_id,content}=ctx.request.body
        const {commentId}=ctx.params
        const user_id=ctx.user.id
        const result=await commentserver.replys(moment_id,content,user_id,commentId)
        ctx.body={
            code:200,
            msg:'回复成功'
        }
    }
    async update(ctx,next){
        const {commentId}=ctx.params
        const {content}=ctx.request.body
        await commentserver.update(commentId,content)
        ctx.body={
            code:200,
            msg:'修改成功',
        }
    }
    async del(ctx,next){
        const {commentId}=ctx.params
       const result= await commentserver.del(commentId)
       console.log(result);
        ctx.body={
            code:200,
            msg:'删除成功',
        }
    }
    async list(ctx,next){
        const {moment_id}=ctx.query
       const result= await commentserver.list(moment_id)
       console.log(result);
        ctx.body={
            code:200,
            msg:'查询成功',
            data:result
        }
    }
}
module.exports=new commentController()