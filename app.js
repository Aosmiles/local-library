import * as dotenv from "dotenv";
dotenv.config();

import createError from "http-errors";
import express from "express";
import nunjucks from "nunjucks";

import mongoose from "mongoose";
const mongoDb = process.env.MONGO_DB_URL;

mongoose.connect(mongoDb, { useNewUrlParser: true, useUnifiedTopology: true });
const database = mongoose.connection;
database.on("error", console.error.bind(console, "MongoDb connection error:"));

import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";

import indexRouter from "./routes/index.js";
import catalogRouter from "./routes/catalog.js";
import { fileURLToPath } from "url";

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// view engine setup
const viewPath = path.join(__dirname, "views");
app.set("views", viewPath);
app.set("view engine", "njk");
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
app.use("/catalog", catalogRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
// eslint-disable-next-line no-unused-vars
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

export default app;
