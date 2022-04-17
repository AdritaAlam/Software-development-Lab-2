const express = require("express");
const router = express.Router();

//dishes = ["Noodles","Pasta","Pizza","Burger"];
const Dishes = require("../models/dishesSchema");


router.get ("/",(req,res) =>{
    Dishes.find().then((dishesList) =>{
         res.send(dishesList);
    }).catch((error) =>{
        console.log(error);
        res.send(error);
    });
});

router.get ("/:dishId",(req,res) =>{
    //const index = req.params.dishId;
    Dishes.findById(req.params.dishId).then((dish) =>{
        res.send(dish);
    }).catch((error) =>{
        console.log(error);
        res.send("__Error___");
    });
});


//post

router.post ("/",(req,res) =>{
    const new_dish = new Dishes(req.body);
    console.log(req.body.name);
    //dishes.push(new_dish);
     new_dish.save().then(() =>{
        console.log("A new dish added");
        res.send("Added a new dish :"+new_dish);
     }).catch((error) =>{
        console.log(error);
        res.send(error);
     })
    
});

//delete all items
router.delete("/",(req,res) =>{
     Dishes.remove({}).then(()=>{
        res.send("Deleted all dishes");
     }).catch((err) =>{
        console.log(err);
        res.send(err);
     });//dishes = [];
    
});


//delete an item
router.delete("/:dishId",(req,res) =>{
    const index = req.params.dishId;
     Dishes.findByIdAndDelete(index).then(() =>{
        res.send("Deleted  dish at index: " + index);
     }).catch((err) =>{
        console.log(err);
        res.send(err);
     });//dishes.splice(index,1);
    
});

//put
router.put("/:dishId",(req,res) =>{
    const index = req.params.dishId;
     Dishes.findByIdAndUpdate(index,req.body).then((dish) =>{
        res.send("updated  dish at index: "+ index);
     }).catch((err)=>{
        console.log(err);
        res.send(err); 
     });//dishes[index] = req.body.name;
    
});




module.exports = router; 