const Job = require("../models/Job");

/*
Create Job
*/
exports.createJob = async (req, res) => {
  try {

    const { type, payload } = req.body;

    const job = await Job.create({
      type,
      payload,
      status: "PENDING"
    });

    res.status(201).json({
      jobId: job._id,
      status: job.status
    });

  } catch (error) {

    res.status(500).json({
      error: error.message
    });

  }
};



/*
Get Job by ID
*/
exports.getJobById = async (req, res) => {

  try {

    const job = await Job.findById(req.params.id);

    if (!job) {
      return res.status(404).json({
        message: "Job not found"
      });
    }

    res.json(job);

  } catch (error) {

    res.status(500).json({
      error: error.message
    });

  }

};