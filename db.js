const mysql = require("mysql2");

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Abhay9955@",
    database:"selling_db",
});

db.connect((err) => {
    if(err){
        console.log("Database conneection error"+err);
    }else{
        console.log("MYSQL Database connection success");
    }
});

module.exports = db;