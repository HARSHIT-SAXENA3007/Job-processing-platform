const express = require("express");

const jobRoutes = require("./routes/jobRoutes");

const app = express();

app.use(express.json());

app.use("/api", jobRoutes);

app.get("/", (req, res) => {
  res.send("API Running");
});

module.exports = app;