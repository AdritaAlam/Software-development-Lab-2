const express = require("express");
const router = express.Router();

promotions = ["10% discount","5% discount","Buy 1 Get 1","15% cashback on bkash"];

router.get ("/",(req,res) =>{
    res.send(promotions);
});

router.get ("/:promoId",(req,res) =>{
    const index = req.params.promoId;
    res.send(promotions[index]);
});


//post

router.post ("/",(req,res) =>{
    const new_promotions =req.body.name;
    promotions.push(new_promotions);
    console.log("A new promotion added");
    res.send("Added a new promotion :"+req.body.name);
});

//delete all promotions
router.delete("/",(req,res) =>{
    promotions = [];
    res.send("Deleted all promotions");
});


//delete an promotion
router.delete("/:promoId",(req,res) =>{
    const index = req.params.promoId;
    //const dish = promotions[index];
    promotions.splice(index,1);
    res.send("Deleted  promotion at index: " + index);
});

//put
router.put("/:promoId",(req,res) =>{
    const index = req.params.promoId;
    promotions[index] = req.body.name;
    res.send("updated  promotion at index: "+ index);
});



module.exports = router; 