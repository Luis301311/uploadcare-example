import dotenv from 'dotenv';
dotenv.config()
const config ={
    app:{
        port: process.env.PORT, 
    },
    mysql: {
        host: process.env.MYSQL_HOST || 'localhost',
        user : process.env.MYSQL_USER || 'root',
        password: process.env.MYSQL_PASSWORD || "",
        database: process.env.MYSQL_DB,
        port: process.env.MYSQL_PORT
    }
}
export default config; 
