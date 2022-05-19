require("dotenv").config();
const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const mongoUrl = process.env.DATABASE_URL;

mongoose.connect(mongoUrl);
const database = mongoose.connection;

database.on("error", (error) => {
  console.log(error);
});

database.once("connected", () => {
  console.log("Database Connected");
});

const app = express();
app.use(cors());
app.use(express.json());

const userRoutes = require("./routes/user");

app.use("/users", userRoutes);

const port = process.env.PORT || 3030;

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
