const express = require("express");

const authMiddleware = require("../middleware/authMiddleware");

const User = require("../models/User");

const Job = require("../models/Job");

const router = express.Router();


router.get("/me", authMiddleware, async (req, res) => {

 const user = await User.findById(req.userId).select("-password");

 const jobCount = await Job.countDocuments({

  userId: req.userId

 });

 res.json({

  ...user.toObject(),

  jobCount

 });

});


module.exports = router;