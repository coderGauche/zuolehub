const jwt =require('jsonwebtoken')
const {PRIVATE_KEY}=require('../app/config')
class authController{
    async login(ctx,next){
        console.log(ctx.user);
        const{id,name}=ctx.user
        const token=jwt.sign({id,name},PRIVATE_KEY,{
            expiresIn:60*60*24,
            algorithm:'RS256'
        })
        ctx.body={
            code:200,
            msg:'success',
            data:{
                user:ctx.user,
                token
            }
        }

    }
    async success(ctx,next){
        console.log(ctx.user);
        ctx.body={
            code:200,
            msg:'授权成功',
            data:{
                user:ctx.user
            }
        }

    }
}

module.exports = new authController;