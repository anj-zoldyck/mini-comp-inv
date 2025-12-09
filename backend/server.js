const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const productRoutes = require("./routes/productRoutes");

const app = express();
app.use(express.json());
app.use(cors());

// MongoDB Connection (Mongoose v7+ syntax)
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.error(err));

// Routes
app.use("/api/products", productRoutes);

// Local server
app.listen(5000, () => console.log("Server running at http://localhost:5000"));

module.exports = app; // Needed for Vercel
