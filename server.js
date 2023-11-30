const express=require("express");
const app=express();
const dotenv=require("dotenv");
const mongoose=require("mongoose");
const cors = require("cors");

dotenv.config();

mongoose.connect(
    process.env.DB_CONNECT,
    {useUnifiedTopology: true, useNewUrlParser:true}
);

const db = mongoose.connection;

db.on("error", (error) => {
    console.error("MongoDB connection error:", error);
});

db.once("open", () => {
    console.log("Connected to MongoDB");
});

//Import Routes
const productRoutes=require("./routes/product");

// Middlewares
app.use(express.json());
app.use(cors());

//Route Middlewares
app.use("/api/products",productRoutes);


app.listen(3000,() => console.log("server up and running on port 3000"));
