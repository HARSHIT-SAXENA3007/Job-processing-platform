const express = require("express");

const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");

const {
  createJob,
  getJobById,
  getJobs
} = require("../controllers/jobController");


// create job
router.post("/", authMiddleware, createJob);


// get ALL jobs of logged-in user
router.get("/", authMiddleware, getJobs);


// get single job
router.get("/:id", authMiddleware, getJobById);


module.exports = router;