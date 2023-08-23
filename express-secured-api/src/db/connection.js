import { MongoClient } from "mongodb";

const connectionString = process.env.MONGODB_URI || "";
const client = new MongoClient(connectionString);

let conn;
try {
  conn = await client.connect();
} catch (err) {
  console.log("Unable to connect to MongoDB");
  console.log(err);
}

const db = conn.db("database_name");

export default db;
