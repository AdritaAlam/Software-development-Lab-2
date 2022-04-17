const express = require("express");
const router = express.Router();

//leaders = ["Farjana","Mhamuda","Rupa","Chaity","Srity","Adrita"];
const Leaders = require("../models/leadersSchema");
//get
router.get ("/",(req,res) =>{
    Leaders.find().then((LeadersList) =>{
         res.send(LeadersList);
    }).catch((error) =>{
        console.log(error);
        res.send(error);
    });
});

router.get ("/:leaderId",(req,res) =>{
    //const index = req.params.leaderId;
    Leaders.findById(req.params.leaderId).then((leader) =>{
        res.send(leader);
    }).catch((error) =>{
        console.log(error);
        res.send("__Errror__");
    });
});


//post

router.post ("/",(req,res) =>{
    const new_leader = new Leaders(req.body);
    console.log(req.body.name);
    //Leaders.push(new_leader);
     new_leader.save().then(() =>{
        console.log("A new leader added");
        res.send("Added a new leader :"+new_leader);
     }).catch((error) =>{
        console.log(error);
        res.send("__Errror__");
     })
    
});

//delete all items
router.delete("/",(req,res) =>{
     Leaders.remove({}).then(()=>{
        res.send("Deleted all Leaders");
     }).catch((err) =>{
        console.log(err);
        res.send("__Errror__");
     });//Leaders = [];
    
});


//delete an item
router.delete("/:leaderId",(req,res) =>{
    const index = req.params.leaderId;
     Leaders.findByIdAndDelete(index).then(() =>{
        res.send("Deleted  leader at index: " + index);
     }).catch((err) =>{
        console.log(err);
        res.send(err);
     });//Leaders.splice(index,1);
    
});

//put
router.put("/:leaderId",(req,res) =>{
    const index = req.params.leaderId;
     Leaders.findByIdAndUpdate(index,req.body).then((leader) =>{
        res.send("updated  leader at index: "+ index);
     }).catch((err)=>{
        console.log(err);
        res.send(err); 
     });//Leaders[index] = req.body.name;
    
});

module.exports = router; 