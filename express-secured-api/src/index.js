import express from "express";

import bodyParser from "body-parser";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

const PORT = process.env.PORT || 3001;

const app = express();

app.use(helmet());
app.use(bodyParser.json());
app.use(cors());
app.use(morgan("dev"));

app.get("/", (req, res) => {
    res.send("OK");
});

app.listen(PORT, () => {
  console.log(`Starting server at port ${PORT}`);
});
