"use strict";
// this page communicates with the back end
 
const express = require("express");//requires express to be used 
const app = express();//allows express to be used throughout the app
const shoes = require("./routes/shoes");//requires routes from shoes
const clothes = require("./routes/clothes")//requires routes from clothes
const accessories = require("./routes/accessories")//requires routes from accessories


app.use(express.static("./public"));// use data from front end to use locally
app.use(express.json());//only parses incoming requests using json
app.use("/api/shop", shoes);//use info from shoes module
app.use("/api/shop", clothes);//use info from clothes module
app.use("/api/shop", accessories);//use info from accessories module

const port = 5000;//location of server

app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});//run server on port 5000