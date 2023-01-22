import mysql from "mysql"

export const db = mysql.createConnection({
    host:"eu-cdbr-west-03.cleardb.net",
    user:"b5487bff7f6b75",
    password:"fe240ed0",
    database:"heroku_cbc9a935f8da602"
})


// mysql://b5487bff7f6b75:fe240ed0@eu-cdbr-west-03.cleardb.net/heroku_cbc9a935f8da602?reconnect=true