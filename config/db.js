const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "recruiter",
    multipleStatements: true
});

const connect = async () => {
    try {
        mysqlConnection.connect()
        console.log("connectd to db");      
        } catch (ex) {
        console.log("Db is not connected! ", ex);
    }
}

module.exports = connect;