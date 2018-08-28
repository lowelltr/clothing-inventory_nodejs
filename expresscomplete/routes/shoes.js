"use strict";
//express gives us access to the router class
const express = require("express");
const shoes = express.Router();
//express.router allows to create a router for shoes so we can use data here in shoes.js
const shoeList = [{
    brand: "Nike",
    size: 10,
    color: ["White", "Red", "Blue"],
    price: 100,
    id: 0
}, {
    brand: "Nike",
    size: 10,
    color: ["Orange", "Red"],
    price: 100,
    id: 1
}];

let idCount = shoeList.length;
//shoeList.length returns the length of our array 
// PUT - params + body
// DELETE - params
// POST - body
// GET - params
shoes.get("/shoes", (req, res) => {
    res.send(shoeList);
//The get method used here sends the shoe list when requested
});

shoes.post("/shoes", (req, res) => {
    shoeList.push({
        brand: req.body.brand,
        size: req.body.size,
        color: req.body.color,
        price: req.body.price,
        id: idCount++
        //the post method sends data and allow the user to add info to the array
    });
    res.send(shoeList);
});

shoes.put("/shoes/:id", (req, res) => {
    //this method allows the user to update the shoe list by running a for loop
   // and splice the selected object
    let count = 0;
    for (let shoe in shoeList) {
        if (shoe.id == req.params.id) {
            shoeList.splice(count, 1, req.body);
        }
        count++;
    }
    res.send(shoeList);
});

shoes.delete("/shoes/:id", (req, res) => {
    // req.params = the param added to the url
    //this removes object from the array by running a for loop 
    //the user is able to select which object to delete from the array 
    let count = 0;
    for (let shoe of shoeList) {
        if (shoe.id == req.params.id) {
            shoeList.splice(count, 1);
        }
        count++;
    }
    res.send(shoeList);
});

module.exports = shoes;
//this allows us to use shoes where ever we need it 