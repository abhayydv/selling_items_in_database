const express = require("express");
const bodyparser = require("body-parser");
const db = require("./db");

const app = express();

app.use(bodyparser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/",(req,res) => {
    res.sendFile(__dirname+"/public/index.html");
});

app.post("/add-items",(req,res) => {
    console.log("Form Recived",req.body);
    const {name,rate,quantity} = req.body;
    const sql = "INSERT INTO selling_table(name,rate,quantity) values(?,?,?)";

    db.query(sql,[name,rate,quantity],(err) => {
        if(err){
            console.log("Error : ",err.message);
            return res.status(500).send("Database Error");
        }

        console.log("Item added successfully");
        return res.send("Item Added Successfully");
    });
});

app.listen(3000,() => {
    console.log("server running on port 3000");
});