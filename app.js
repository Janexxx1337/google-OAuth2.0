//jshint esversion:6
require('dotenv').config()
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
const saltRounds = 10;


const app = express();


app.use(express.static("public"));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
    extended: true
}));

mongoose.set('strictQuery', true);
mongoose.connect(process.env.CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true });


const userSchema = new mongoose.Schema({
    email: String,
    password: String
});


const User = new mongoose.model("User", userSchema);

app.get("/", function (req, res) {
    res.render("home");
});

app.get("/login", function (req, res) {
    res.render("login");
});

app.get("/register", function (req, res) {
    res.render("register");
});

app.post('/register', (req, res) => {

    bcrypt.hash(req.body.password, saltRounds, function (err, hash) {

        const newUser = new User({
            email: req.body.username,
            password: hash
        })

        newUser.save().then(() => {
            res.render("secrets");
        }).catch((err) => {
            console.log(err);
        })
    });


});

app.post('/login', (req, res) => {

    const username = req.body.username
    const password = req.body.password

    User.findOne({ email: username })
        .then((foundUser) => {
            if (foundUser) {
                bcrypt.compare(password, foundUser.password, function (err, result) {
                    if (result) {
                        res.render('secrets')
                    }
                    else {
                        res.send(401, "Unauthorized")
                    }
                });

            }
            else {
                res.send(401, "Unauthorized")
            }
        })
        .catch((error) => {
            console.log(error);
            res.send(400, "Bad Request");
        });

})


app.listen(3000, function () {
    console.log("Server started on port 3000.");
});