const fileserve = require('../service/fileService')
const {
    AVATAR_PATH
} = require('../constants/file-path');
const userService = require('../service/userService')
const {
    APP_HOST,
    APP_PORT
} = require('../app/config');
class fileController {
    async saveavatarinfo(ctx, next) {
        //获取图像先关信息
        const {
            mimetype,
            filename,
            size
        } = ctx.req.file
        const user_id = ctx.user.id
        //将信息数据保存数据库中
        const rutser = await fileserve.create(filename, mimetype, size, user_id)
        console.log(rutser);
        // 3.将图片地址保存到user表中
        const avatarUrl = `${APP_HOST}:${APP_PORT}/users/${user_id}/avatar`;
        console.log(avatarUrl);
        console.log(user_id);
        await userService.updateAvatarUrlById(avatarUrl, user_id);
        console.log(userService);
        ctx.body = {
            code: 200,
            msg: '图片上传成功'
        }
    }
    async savePictureInfo(ctx, next) {
        console.log(ctx.req.files);
        // 1.获取图像信息
        const files = ctx.req.files;
        const {
            id
        } = ctx.user;
        const {
            momentId
        } = ctx.query;
        // 2.将所有的文件信息保存到数据库中
        for (let file of files) {
            const {
                filename,
                mimetype,
                size
            } = file;
            await fileserve.createFile(filename, mimetype, size, id, momentId);
        }
        ctx.body = '动态配图上传完成~'
    }
}

module.exports = new fileController()