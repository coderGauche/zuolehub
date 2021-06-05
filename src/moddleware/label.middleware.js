const server = require('../service/lableService')
const verifyLabelExists = async (ctx, next) => {
    const newLabels = []
    const {
        lables
    } = ctx.request.body
    for (let name of lables) {
        const labelResult = await server.getLabelByName(name)
        console.log(labelResult);
        const lable = {
            name
        }
        if (!labelResult) {
            const result = await server.create(name)
            console.log(result);
            lable.id = result.insertId
        } else {
            lable.id = labelResult.id
        }
        newLabels.push(lable)
    }
    console.log(newLabels);
    ctx.lables = newLabels
    await next()
}

module.exports = {
    verifyLabelExists
}