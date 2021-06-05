const Router = require('koa-router');

const authRouter = new Router();
const {
    login,
    success
}=require('../controller/authController')
const {
    verifyLOgin,
    verifyAuth
}=require('../moddleware/authModdleware')

authRouter.post('/login',verifyLOgin,login)
authRouter.get('/text',verifyAuth,success)

module.exports = authRouter;