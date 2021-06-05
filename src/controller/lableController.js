const labelserve=require('../service/lableService')
class lableController{
   async create(ctx,next){
         const{name}=ctx.request.body
         const result=labelserve.create(name)
         ctx.body={
             code:200,
             msg:'创建成功',
         }
   }
    async list(ctx, next) {
    const { limit, offset } = ctx.query;
    const result = await labelserve.getLabels(limit, offset);
    ctx.body = result;
  }
}
module.exports=new lableController()