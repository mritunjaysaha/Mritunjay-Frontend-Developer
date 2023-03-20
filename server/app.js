require("dotenv").config();

const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const { connectDB } = require("./config/db");



// initialize app
const app = express();

// connect database
connectDB();

// initialize middleware
app.use(cors({ origin: true, credentials: true }));
app.use(cookieParser());
app.use(express.json({ extend: false }));

// my routes
app.get("/", (req, res) => res.send("Server is active"));

module.exports = { app };
