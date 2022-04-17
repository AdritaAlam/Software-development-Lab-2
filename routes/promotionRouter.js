const express = require("express");
const router = express.Router();

//promotions = ["10% discount","5% discount","Buy 1 Get 1","15% cashback on bkash"];
const Promotions = require("../models/promotionsSchema");


router.get ("/",(req,res) =>{
    Promotions.find().then((PromotionsList) =>{
         res.send(PromotionsList);
    }).catch((error) =>{
        console.log(error);
        res.send(error);
    });
});

router.get ("/:PromotionId",(req,res) =>{
    //const index = req.params.PromotionId;
    Promotions.findById(req.params.PromotionId).then((Promotion) =>{
        res.send(Promotion);
    }).catch((error) =>{
        console.log(error);
        res.send("__Errror__");
    });
});


//post

router.post ("/",(req,res) =>{
    const new_Promotion = new Promotions(req.body);
    console.log(req.body.name);
    //Promotions.push(new_Promotion);
     new_Promotion.save().then(() =>{
        console.log("A new Promotion added");
        res.send("Added a new Promotion :"+new_Promotion);
     }).catch((error) =>{
        console.log(error);
        res.send("__Errror__");
     })
    
});

//delete all items
router.delete("/",(req,res) =>{
     Promotions.remove({}).then(()=>{
        res.send("Deleted all Promotions");
     }).catch((err) =>{
        console.log(err);
        res.send("__Errror__");
     });//Promotions = [];
    
});


//delete an item
router.delete("/:PromotionId",(req,res) =>{
    const index = req.params.PromotionId;
     Promotions.findByIdAndDelete(index).then(() =>{
        res.send("Deleted  Promotion at index: " + index);
     }).catch((err) =>{
        console.log(err);
        res.send(err);
     });//Promotions.splice(index,1);
    
});

//put
router.put("/:PromotionId",(req,res) =>{
    const index = req.params.PromotionId;
     Promotions.findByIdAndUpdate(index,req.body).then((Promotion) =>{
        res.send("updated  Promotion at index: "+ index);
     }).catch((err)=>{
        console.log(err);
        res.send(err); 
     });//Promotions[index] = req.body.name;
    
});




module.exports = router; 