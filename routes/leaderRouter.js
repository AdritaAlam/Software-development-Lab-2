const express = require("express");
const router = express.Router();

//leaders = ["Farjana","Mhamuda","Rupa","Chaity","Srity","Adrita"];
const Leaders = require("../models/leadersSchema");
//get
router.get ("/",async(req,res) =>{
    const leadersList = await Leaders.find();
    res.send(leadersList);
});

router.get ("/:leaderId",async(req,res) =>{
    const index = req.params.leaderId;
    const leader = await Leaders.findById(index);
    res.send(leader);
});


//post

router.post ("/",async(req,res) =>{
    const new_leader =new Leaders(req.body);
    await new_leader.save();// leaders.push(new_leader);
    console.log("A new leader added");
    res.send("Added a new leader :"+new_leader);
});

//delete all items
router.delete("/",async(req,res) =>{
    await Leaders.remove({});//leaders = [];
    res.send("Deleted all leaders");
});


//delete an item
router.delete("/:leaderId",async(req,res) =>{
    const index = req.params.leaderId;
    //const leader = leaders[index];
    await Leaders.findByIdAndDelete(index);// leaders.splice(index,1);
    res.send("Deleted  leader at index: " + index);
});

//put
router.put("/:leaderId",async(req,res) =>{
    const index = req.params.leaderId;
    await Leaders.findByIdAndUpdate(index,req.body);//leaders[index] = req.body.name;
    res.send("updated  leader at index: "+ index);
});

module.exports = router; 