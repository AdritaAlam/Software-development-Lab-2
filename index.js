PORT = process.env.PORT || 3000;

const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const moongoose = require ("mongoose");


//Middleware
const app = express();
app.use(bodyParser.json());
app.use(morgan("tiny"));


//Routes
const indexRouter = require("./routes/indexRouter");
const dishRouter = require("./routes/dishRouter");
const leaderRouter = require("./routes/leaderRouter");
const promotionRouter = require("./routes/promotionRouter");


//End points
moongoose
    .connect("mongodb://localhost:27017/Restaurant",{useNewUrlParser: true})
    .then(() =>{
        console.log("Database connected successfully!");

        app.use("/",indexRouter);
        app.use("/dishes",dishRouter);
        app.use("/promotions",promotionRouter);
        app.use("/leaders",leaderRouter);
    });

app.listen(3000,() =>{
    console.log("Listening to PORT : "+ PORT);
});