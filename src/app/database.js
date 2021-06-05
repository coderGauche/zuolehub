const mysql = require('mysql2')
const {
    MYSQL_HOST,
    MYSQL_PORT,
    MYSQL_DATABASE,
    MYSQL_USER,
    MYSQL_PASSWORD
} = require('../app/config')

const connections= mysql.createPool({
    host:MYSQL_HOST,
    port: MYSQL_PORT,
    user: MYSQL_USER,
    password: MYSQL_PASSWORD,
    database: MYSQL_DATABASE,
    connectionLimit:10   //控制连接池的数量
})

connections.getConnection((err,conn)=>{
    conn.connect((err)=>{
       if(err){
           console.log('连接失败',err);
       }else{
        console.log('数据库连接成功');
       }
    })
})

module.exports=connections.promise()