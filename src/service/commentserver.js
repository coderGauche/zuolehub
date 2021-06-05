const database = require('../app/database')

class commentserve {
    async create(mement_id, content, id) {
        console.log(mement_id, content, id);
        try {
            const statement = `INSERT INTO comment (content,moment_id,user_id) VALUES (?,?,?)`
            const [result] = await database.execute(statement, [content, mement_id, id])
            console.log();
            return result
        } catch (err) {
            console.log(err);
            const error = new Error(err);
            return ctx.app.emit('error', error, ctx);
        }
    }
    async replys(moment_id, content, user_id,commentId) {
        console.log(moment_id, content, user_id,commentId);
        try {
            const statement = `INSERT INTO comment (content, moment_id, user_id, comment_id) VALUES (?, ?, ?, ?);`
            const [result] = await database.execute(statement, [content, moment_id, user_id,commentId])
            console.log(result);
            return result
        } catch (err) {
            console.log(err);
            const error = new Error(err);
            return ctx.app.emit('error', error, ctx);
        }
    }
    async update(commentId, content) {
        const statement = `UPDATE comment SET content = ? WHERE id = ?`;
        const [result] = await database.execute(statement, [content, commentId]);
        return result;
      }
    async del(commentId) {
        const statement = `DELETE FROM comment WHERE id = ?`;
        const [result] = await database.execute(statement, [commentId]);
        return result;
      }
    async list(moment_id) {
        const statement = `SELECT * FROM comment WHERE moment_id = ?`;
        const [result] = await database.execute(statement, [moment_id]);
        return result;
      }

}

module.exports = new commentserve()