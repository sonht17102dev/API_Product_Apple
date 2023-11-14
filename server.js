const path = require("path");
const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
// const authenRoutes = require("./routes/authen");
const clientRoutes = require("./routes/client");
// const adminRoutes = require("./routes/admin");
const database = require("./config/db/database.js");
// const multer = require("multer");
const app = express();
const port = 5000;
app.use(cors());

database.connect();

app.use("/api", clientRoutes);

app.listen(port);