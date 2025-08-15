import app from "./app.js";
import express from "express"
import dotenv from "dotenv";
import authroute from "./routes/auth.route.js";
import connectDb from "./db/connectDb.js";
dotenv.config();

const port = process.env.PORT || 5000;

connectDb();

app.use(express.json())

app.use("/api/auth", authroute);

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, (req, res) => {
  console.log(`Server is listening at port ${port}.`);
});
