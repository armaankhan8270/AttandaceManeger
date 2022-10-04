import express from "express";
const app = express();
import mongoose from "mongoose";
import cors from "cors";
import UserRouter from "./Routes/User.js";
import bodyParser from "body-parser";

app.use(express.json());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
// app.use("/public", express.static("public"));

app.use(cors());

//This Code Stuff IS related to connetion with backend
const url =
  "mongodb+srv://armaankhan:armaan242@cluster0.ygbfntv.mongodb.net/attendance?retryWrites=true&w=majority";
mongoose.connect(url, () => {
  console.log("successfully connected to mongodb");
});
mongoose.connection.on("connected", () => {
  console.log("conntetd to databse");
});
mongoose.connection.on("disconnected", () => {
  console.log("disconntetd to databse");
});
//Midalware
app.use((err, req, res, next) => {
  return res.json("there is error" + err);
});

//Routes

app.use("/user", UserRouter);
app.listen(3002, (req, res) => {
  console.log("server is running on 3001");
});
