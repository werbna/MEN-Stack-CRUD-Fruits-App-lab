// server.js

const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();

// log connection status to terminal on start
mongoose.connection.on("connected", () => {
  console.log(`Connected to MongoDB ${mongoose.MONGODB_URI}.`);
});

// Import the Fruit model
const Fruit = require("./models/fruit.js");

app.listen(3000, () => {
  console.log("Listening on port 3000");
});

// GET 
app.get('/', (req,res) => {
  res.render('index.ejs');
})

// GET /fruits/new
app.get("/fruits/new", (req, res) => {
  res.render("fruits/new.ejs");
});