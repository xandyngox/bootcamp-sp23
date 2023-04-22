//followed this tutorial https://www.youtube.com/watch?v=fgTGADljAeg&ab_channel=WebDevSimplified
//loads in environment variables from .env file
require("dotenv").config();

const express = require("express");
const app = express();
const port = 3000;

const mongoose = require("mongoose");

//this is for connecting to mongo atlas
// const conn_str = 'mongodb+srv://xxandyngoxx:plswork@cluster0.i9y75co.mongodb.net/?retryWrites=true&w=majority'

const conn_str = process.env.DATABASE_URL;
mongoose.connect(conn_str);
const db = mongoose.connection;

db.on("error", (error) => console.error(error));
db.once("open", () => console.log("connected to database"));

app.use(express.json());

const docsRouter = require("./routes/docs");
// this is equivalent to
// http://localhost:3000/docs/

app.use("/docs", docsRouter);

app.listen(port, () => console.log("Server Started"));
