const express = require("express");
const app = express();
const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://trinhtvfx22649:DxxTUGzQ9ivnJ3Kr@cluster0.ssvrvkk.mongodb.net/nhombe?retryWrites=true&w=majority&appName=AtlasApp"
  )
  .then(() => {
    app.listen(5000);
    console.log("connect successfully!");
  });
