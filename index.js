PORT = process.env.PORT || 3000;

const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const app = express();

app.use(bodyParser.json());

const indexRouter = require("./routes/indexRouter");
const dishRouter = require("./routes/dishRouter");
const leaderRouter = require("./routes/leaderRouter");
const promotionRouter = require("./routes/promotionRouter");


app.use("/",indexRouter);
app.use("/dishes",dishRouter);
app.use("/promotions",promotionRouter);
app.use("/leaders",leaderRouter);


app.use(morgan("tiny"));


app.listen(3000,() =>{
    console.log("Listening to PORT : "+ PORT);
});