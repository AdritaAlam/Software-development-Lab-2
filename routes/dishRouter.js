const express = require("express");
const router = express.Router();

dishes = ["Noodles","Pasta","Pizza","Burger"];

router.get ("/",(req,res) =>{
    res.send(dishes);
});

router.get ("/:dishId",(req,res) =>{
    const index = req.params.dishId;
    res.send(dishes[index]);
});


//post

router.post ("/",(req,res) =>{
    const new_dish =req.body.name;
    dishes.push(new_dish);
    console.log("A new dish added");
    res.send("Added a new dish :"+req.body.name);
});

//delete all items
router.delete("/",(req,res) =>{
    dishes = [];
    res.send("Deleted all dishes");
});


//delete an item
router.delete("/:dishId",(req,res) =>{
    const index = req.params.dishId;
    //const dish = dishes[index];
    dishes.splice(index,1);
    res.send("Deleted  dish at index: " + index);
});

//put
router.put("/:dishId",(req,res) =>{
    const index = req.params.dishId;
    dishes[index] = req.body.name;
    res.send("updated  dish at index: "+ index);
});




module.exports = router; 