import express from "express";
import * as mongoose from "mongoose";

import { userRouter } from "./routers/user.router";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = 5000;

// ROUTER

app.use("/users", userRouter);

app.listen(PORT, () => {
  mongoose.connect("mongodb://127.0.0.1:27017/preview");
  console.log(`Listening on port ${PORT}`);
});
