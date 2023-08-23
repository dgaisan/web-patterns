import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

import db from "./db/connection.js";

const PORT = process.env.PORT || 3000;

const app = express();

app.use(helmet());
app.use(bodyParser.json());
app.use(cors());
app.use(morgan("dev"));

app.get("/", async (req, res) => {
  let collection = db.collection("posts");
  let results = await collection.find({}).limit(20).toArray();

  res.send(results).status(200);
});

app.post("/", async (req, res) => {
  const newDocument = req.body;
  newDocument.date = new Date();
  const collection = db.collection("posts");
  const insertResult = await collection.insertOne(newDocument);
  res.send(insertResult).status(200);
});

app.listen(PORT, () => {
  console.log(`Starting server at port ${PORT}`);
  console.log("Environment:");
  console.log("MONGODB_URI:", process.env.MONGODB_URI);
});
