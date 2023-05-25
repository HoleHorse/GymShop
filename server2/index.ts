import express from "express";
import { connect } from "mongoose";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import authRouter from "./routers/auth";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use("/auth", urlencodedParser, jsonParser, authRouter);

async function run() {
  await connect(
    "mongodb+srv://tkulzhan:tkulzhan@cluster.czbqaif.mongodb.net/gymshop?retryWrites=true&w=majority"
  )
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((error) => {
      console.error("Error connecting to MongoDB:", error);
    });
  app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
  });
}

run();
