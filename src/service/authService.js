const database=require('../app/database')
class authService{
    async checkResource(tableName, id,userId){
        try{
            const statement=`SELECT *FROM ${tableName} WHERE id=? AND user_id=?`
            const [result]=await database.execute(statement,[id,userId])
            console.log(result);
            return result.length===0?false:true
        }catch(err){
            console.log(err); 
        }
       
    }
}
module.exports=new authService()