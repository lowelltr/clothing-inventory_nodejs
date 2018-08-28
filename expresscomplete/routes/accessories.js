"use strict"
//express gives us access to the router class
const express = require("express");
const accessories = express.Router();
//express.router allows to create a router for clothes so we can use data here in accessories.js
const accessoriesList = [{
    //the array
    type: "Belt",
    size: "large",
    price: 30,
    id: 0

}];
let idCount = accessoriesList.length;
//accessoriesList.length returns the length of our array 
// PUT - params + body
// DELETE - params
// POST - body
// GET - params
accessories.get("/accessories", (req, res) => {
    res.send(accessoriesList);
    //The get method used here sends the accessories list when requested
});

accessories.post("/accessories", (req, res) => {
    accessoriesList.push({
        type: req.body.type,
        size: req.body.size,
        price: req.body.price,
        id: idCount++
        //the post method sends data and allow the user to add info to the array
    });
    res.send(accessoriesList);
});
accessories.put("/accessories/:id", (req, res) => {
    let count = 0;
    for (let accessory of accessoriesList) {
        if (accessory.id == req.params.id) {
            accessoriesList.splice(count, 1, req.body);
        }
        count++;
    }
    res.send(accessoriesList); 
    //this method allows the user to update the accessories list by running a for loop
    // and splice the selected object

});

accessories.delete("/accessories/:id", (req, res) => {
    let count = 0;
    for (let accessory of accessoriesList) {
        if (accessory.id == req.params.id) {
            accessoriesList.splice(count, 1);
        }
        count++;
    }
    res.send(accessoriesList);
// req.params = the param added to the url
    //this removes object from the array by running a for loop 
    //the user is able to select which object to delete from the array 
});
module.exports = accessories;
//this allows us to use accessories where ever we need it 
