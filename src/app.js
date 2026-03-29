const express = require("express");
const cors =require("cors");

const jobRoutes = require("./routes/jobRoutes");
const authRoutes = require("./routes/authRoutes");

const app = express();


app.use(cors({
  origin:[
    "http://localhost:3000",
  
  "https://job-platform-ui-rosy.vercel.app"
  ],
  credentials: true
}));

const userRoutes = require("./routes/userRoutes");
app.use("/api/user", userRoutes);

app.use(express.json());

app.use("/api/auth", authRoutes);

app.use("/api/jobs", jobRoutes);

app.get("/", (req, res) => {
  res.send("API Running");
});

module.exports = app;