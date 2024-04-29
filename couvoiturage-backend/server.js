const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const app = express();
app.use(express.json());
app.use(cors());
const userRoutes = require("./routes/user.route");
const postRoutes = require("./routes/post.route");
mongoose.connect(process.env.DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error :"));
db.once("open", () => {
  console.log("database connected successfully...");
});
app.use("/users", userRoutes);
app.use("/posts", postRoutes);
app.get("/", function (req, res) {
  res.send("hello");
});
app.use("*", (req, res) => {
  res.send("page not fouund");
});

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
