const Router=require('koa-router')
const fileRouter=new Router({prefix:'/upload'})
const{avatarHander,pictureHandler,pictureResize}=require('../moddleware/filemoddleware')
const{
    verifyAuth,
}=require('../moddleware/authModdleware')
const{
    saveavatarinfo,
    savePictureInfo
}=require('../controller/fileController')

fileRouter.post('/avatar',verifyAuth,avatarHander,saveavatarinfo)
fileRouter.post('/picture', verifyAuth, pictureHandler,pictureResize,savePictureInfo);

module.exports=fileRouter   