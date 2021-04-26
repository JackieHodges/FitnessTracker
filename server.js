const path = require('path');
const express = require('express');
// const routes = require('./controllers');
const mongojs = require("mongojs");
const logger = require("morgan");

const databaseURL = "WorkoutTracker";
const collections = ["workouts"];
const db = mongojs(databaseURL, collections);

const app = express();
// const PORT = process.env.PORT || 3001;

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// app.use(routes);

db.on("error", error => {
  console.log("Database Error: ", error);
})

app.listen(3000, () => {
  console.log("App running on port 3000!");
});