// backend/api/index.js
const serverless = require("serverless-http");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config(); // load .env variables

const productRoutes = require("../routes/productRoutes"); // path from api/ to routes

const app = express();
app.use(express.json());
app.use(cors());

// -----------------------------
// CONNECT TO MONGODB
// -----------------------------
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.error(err));

// -----------------------------
// ROUTES
// -----------------------------
app.use("/api/products", productRoutes);

// -----------------------------
// EXPORT FOR VERCEL
// -----------------------------
module.exports = app;
module.exports.handler = serverless(app);
