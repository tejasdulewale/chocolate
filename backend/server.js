import dotenv from "dotenv";
dotenv.config();
import express from "express";
import path from "path";
import dbConnection from "./config/db.js";
import userRoute from "./routes/userRoute.js";
const app = express();
const port = process.env.PORT || 3000;

dbConnection();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(userRoute);

app.use(express.static(path.join(__dirname, "../frontend/choclate/dist")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/choclate/dist/index.html"));
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
