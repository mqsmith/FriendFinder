let path = require("path");
let express = require("express");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.listen(PORT, function(){
    console.log("App listening on http://localhost:" + PORT);
    // console.log("Reservations: " + newReservation.customerName);
});

//Routes

app.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "app/public/survey.html"));
});

app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "app/public/home.html"));
});