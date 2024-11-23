import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
mongoose
  .connect(process.env.MONGODB_CONNECTION_STRING as string)
  .then(() => {
    console.log("Connected to databases");
  })
  .catch((error) => {
    console.log(error);
  });
const app = express();
// require("dotenv").config();
app.use(express.json());
app.use(cors());
const port = 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, World!");
});
//pas-b0pIxZF4q8DPE8io
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
