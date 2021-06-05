const database=require('../app/database')

class lableServer{
    async create(name){
        const statement=`INSERT INTO label (name) VALUES (?)`
       const [result]=await database.execute(statement,[name])
        return result
    }
    async getLabelByName(name){
      try{
        const statement=`SELECT*FROM label WHERE name=?`
        const [result]=await database.execute(statement,[name])
        return result[0]
      }catch(err){
       console.log(err);
      }
    }
    async getLabels(limit, offset) {
        const statement = `SELECT * FROM label LIMIT ?, ?;`;
        const [result] = await database.execute(statement, [offset, limit]);
        return result;
      }
    
}
module.exports=new lableServer