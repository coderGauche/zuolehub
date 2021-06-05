const fs = require('fs');
const service=require('../service/userService')
const fileService=require('../service/fileService')
const { AVATAR_PATH } = require('../constants/file-path');
class userController{
    async create(ctx,next){
      //获取用户请求参数
      const user=ctx.request.body
      console.log(user);
      //查询数据
      const result=await service.create(user)
      //返回数据
      ctx.body=result
    }
    async avatarInfo(ctx, next) {
      // 1.用户的头像是哪一个文件呢?
      const { userId } = ctx.params;
      console.log(userId);
      const avatarInfo = await fileService.getAvatarByUserId(userId);
      console.log('avatarInfo',avatarInfo);
  
      // 2.提供图像信息
      ctx.response.set('content-type', avatarInfo.mimetype);
      ctx.body = fs.createReadStream(`${AVATAR_PATH}/${avatarInfo.filename}`);
    }
}

module.exports=new userController()