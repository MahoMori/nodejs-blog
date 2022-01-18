require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const blogRoutes = require("./routes/blog.route");

const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: false }));

app.use(blogRoutes);

const PORT = process.env.PORT || 8000;
mongoose.connect(process.env.MONGODB_URL, (err) => {
  if (err) console.log(err);
  app.listen(PORT);
});
