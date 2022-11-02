require("dotenv").config();
const createError = require("http-errors");
const express = require("express");
const nunjucks = require("nunjucks");

const mongoose = require("mongoose");
const mongoDb = process.env.MONGO_DB;

mongoose.connect(mongoDb, { useNewUrlParser: true, useUnifiedTopology: true });
const database = mongoose.connection;
database.on("error", console.error.bind(console, "MongoDb connection error:"));

const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const catalogRouter = require("./routes/catalog");

const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
nunjucks.configure("views", {
  autoescape: true,
  express: app,
});

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/catalog", catalogRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
