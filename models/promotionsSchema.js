const mongoose = require("mongoose");
//const  schema = require("nodemon/lib/utils");

const schema = new mongoose.Schema({
    name: String,
    image: String,
    label: String,
    price: Number,
    description: String,
    featured: Boolean,
});

const Promotions = mongoose.model("Promotions",schema);
module.exports = Promotions;