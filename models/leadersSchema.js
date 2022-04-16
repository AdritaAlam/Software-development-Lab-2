const mongoose = require("mongoose");
//const { stringify } = require("nodemon/lib/utils");

const schema = new mongoose.Schema({
    name: String,
    image: String,
    designation: String,
    abbr: String,
    description: String,
    featured: Boolean,
});

const Leaders = mongoose.model("Leaders",schema);
module.exports = Leaders;