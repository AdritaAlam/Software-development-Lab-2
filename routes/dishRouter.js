const express = require("express");
const router = express.Router();

//dishes = ["Noodles","Pasta","Pizza","Burger"];
const Dishes = require("../models/dishesSchema");


router.get ("/",async(req,res) =>{
    const dishesList = await Dishes.find();
    res.send(dishesList);
});

router.get ("/:dishId",async(req,res) =>{
    //const index = req.params.dishId;
    const dish = await Dishes.findById(req.params.dishId);
    res.send(dish);
});


//post

router.post ("/",async(req,res) =>{
    const new_dish = new Dishes(req.body);
    //dishes.push(new_dish);
    await new_dish.save();
    console.log("A new dish added");
    res.send("Added a new dish :"+new_dish);
});

//delete all items
router.delete("/",async(req,res) =>{
    await Dishes.remove({});//dishes = [];
    res.send("Deleted all dishes");
});


//delete an item
router.delete("/:dishId",async(req,res) =>{
    const index = req.params.dishId;
    await Dishes.findByIdAndDelete(index);//dishes.splice(index,1);
    res.send("Deleted  dish at index: " + index);
});

//put
router.put("/:dishId",async(req,res) =>{
    const index = req.params.dishId;
    await Dishes.findByIdAndUpdate(index,req.body);//dishes[index] = req.body.name;
    res.send("updated  dish at index: "+ index);
});




module.exports = router; 