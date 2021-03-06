require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const mongoose = require("mongoose");

const blogRoutes = require("./routes/blog.route");

const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(blogRoutes);

app.use((req, res, next) => {
  res.status(404).render("404", { pageTitle: "Page Not Found" });
});

const PORT = process.env.PORT || 8000;
mongoose.connect(process.env.MONGODB_URL, (err) => {
  if (err) console.log(err);
  app.listen(PORT);
});
