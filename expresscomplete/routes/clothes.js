"use strict";
//express gives us access to the router class
const express = require("express");
const clothes = express.Router();
//express.router allows to create a router for clothes so we can use data here in clothes.js
const clothingList = [{
    //clothingList is our array 
    type: "spring",
    size: 10,
    color: ["White", "Red", "Blue"],
    gender: "Male",
    id: 0
}, {
    brand: "Summer",
    size: 12,
    color: ["Orange", "Red"],
    gender: "Female",
    id: 1
}];
let idCount = clothingList.length;
//clothingList.length returns the length of our array 
// PUT - params + body
// DELETE - params
// POST - body
// GET - params
clothes.get("/clothes", (req, res) => {
    res.send(clothingList);
//The get method used here sends the clothing list when requested
});

clothes.post("/clothes", (req, res) => {
    clothingList.push({
        type: req.body.type,
        size: req.body.size,
        color: req.body.color,
        gender: req.body.gender,
        id: idCount++
        //the post method sends data and allow the user to add info to the array
    });
    res.send(clothingList);
});
clothes.put("/clothes/:id", (req, res) => {
   //this method allows the user to update the clothing list by running a for loop
   // and splice the selected object
    let count = 0;
    console.log(req.params.id);
    console.log(req.body);
    for (let clothes of clothingList) {
        if (clothes.id == req.params.id) {
            let updatedClothing = {
                type: req.body.type,
                size: req.body.size,
                color: req.body.color,
                gender: req.body.gender,
                id: Number(req.params.id)
            }
            clothingList.splice(count, 1, updatedClothing);
        }
        count++;
    }
    res.send(clothingList);
});

clothes.delete("/clothes/:id", (req, res) => {
    // req.params = the param added to the url
    //this removes object from the array by running a for loop 
    //the user is able to select which object to delete from the array 
    let count = 0;
    for (let clothing of clothingList) {
        if (clothing.id == req.params.id) {
            clothingList.splice(count, 1);
        }
        count++;
    }
    res.send(clothingList);
});

module.exports = clothes;
//this allows us to use clothes where ever we need it 