var express = require('express');
var app = express();
var bodyParser = require("body-parser");
var methodOverride = require("method-override");

const index = require("./routes/index");

app.use(bodyParser.urlencoded({
    extended: true
}));

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));
app.locals.moment = require('moment');

app.use("/", index);

app.listen(8081, "192.168.1.30" ,() => {
    console.log("Listening...");
});
