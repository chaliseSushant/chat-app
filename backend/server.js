const express = require("express");
const dotenv = require("dotenv");
const chats = require("./data/data");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");

dotenv.config();
connectDB();

const app = express();

app.use(express.json());
app.get("/", (req, res) => {
  res.send("API is running");
});

app.use("/api/user", userRoutes);

app.
const PORT = process.config.PORT || 4000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
