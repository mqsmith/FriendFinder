let path = require("path");
let express = require("express");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);


app.listen(PORT, function(){
    console.log("App listening on http://localhost:" + PORT);
    // console.log("Reservations: " + newReservation.customerName);
});

