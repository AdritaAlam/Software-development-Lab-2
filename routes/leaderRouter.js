const express = require("express");
const router = express.Router();

leaders = ["Farjana","Mhamuda","Rupa","Chaity","Srity","Adrita"];

//get
router.get ("/",(req,res) =>{
    res.send(leaders);
});

router.get ("/:leaderId",(req,res) =>{
    const index = req.params.leaderId;
    res.send(leaders[index]);
});


//post

router.post ("/",(req,res) =>{
    const new_leader =req.body.name;
    leaders.push(new_leader);
    console.log("A new leader added");
    res.send("Added a new leader :"+req.body.name);
});

//delete all items
router.delete("/",(req,res) =>{
    leaders = [];
    res.send("Deleted all leaders");
});


//delete an item
router.delete("/:leaderId",(req,res) =>{
    const index = req.params.leaderId;
    //const leader = leaders[index];
    leaders.splice(index,1);
    res.send("Deleted  leader at index: " + index);
});

//put
router.put("/:leaderId",(req,res) =>{
    const index = req.params.leaderId;
    leaders[index] = req.body.name;
    res.send("updated  leader at index: "+ index);
});

module.exports = router; 