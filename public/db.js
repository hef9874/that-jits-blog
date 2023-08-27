import mysql from "mysql"


export const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Pear-55-45@",
    db: "jjBlog"
})