const express = require("express");
const { append } = require("express/lib/response");
const router = express.Router();

//get 
router.get ("/",(req,res) =>{
    // res.send("Welcome to our restaurant");
     res.sendFile("C:/Users/Adrita Alam/Desktop/practice16/softDev/index.html")
 });


module.exports = router;