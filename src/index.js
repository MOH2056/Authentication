//importing modules
const express = require('express');
const bcrypt = require('bcrypt');
const part = require('path');
const collection = require('./config');
//const details = require('./config');


const instance = express();

instance.use(express.json());

instance.use(express.static("styles"));

instance.use(express.urlencoded({extended:false}));

instance.set("view engine", "ejs");

instance.get("/", (req, res) => {
    res.render("Home")
})
instance.get("/register.html", (req, res)=> {
    res.render("register")
})
instance.get("/login.html", (req, res)=> {
    res.render("login")
})
instance.get("/about.html", (req, res)=> {
    res.render("about")
})
instance.post("/login.html", (req, res)=> {
})
instance.listen(3000, () => {
    console.log('SERVER IS WORKING')
})
