const express = require("express");
const router = express.Router();

//promotions = ["10% discount","5% discount","Buy 1 Get 1","15% cashback on bkash"];
const Promotions = require("../models/promotionsSchema");


router.get ("/",async(req,res) =>{
    const promotionsList = await Promotions.find();
    res.send(promotionsList);
});

router.get ("/:promoId",async(req,res) =>{
    const index = req.params.promoId;
    const promotion = await Promotions.findById(index);
    res.send(promotion);
});


//post

router.post ("/",async(req,res) =>{
    const new_promotion = new Promotions(req.body);
    await new_promotion.save();//promotions.push(new_promotions);
    console.log("A new promotion added");
    res.send("Added a new promotion :"+new_promotion);
});

//delete all promotions
router.delete("/",async(req,res) =>{
    await Promotions.remove({});//promotions = [];
    res.send("Deleted all promotions");
});


//delete an promotion
router.delete("/:promoId",async (req,res) =>{
    const index = req.params.promoId;
    //const dish = promotions[index];
    await Promotions.findByIdAndDelete(index);//promotions.splice(index,1);
    res.send("Deleted  promotion at index: " + index);
});

//put
router.put("/:promoId",async(req,res) =>{
    const index = req.params.promoId;
    await Promotions.findByIdAndUpdate(index,req.body);//promotions[index] = req.body.name;
    res.send("updated  promotion at index: "+ index);
});



module.exports = router; 