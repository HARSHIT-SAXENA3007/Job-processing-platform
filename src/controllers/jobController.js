const Job = require("../models/Job");

exports.createJob = async (req, res) => {

  try {

    const job = await Job.create({

      type: req.body.type,

      payload: req.body.payload,

      status: "PENDING",

      userId: req.userId

    });

    res.status(201).json(job);

  } catch (error) {

    res.status(500).json({

      error: error.message

    });

  }

};


exports.getJobById = async (req, res) => {

  try {

    const job = await Job.findOne({

      _id: req.params.id,

      userId: req.userId

    });

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

exports.getJobs = async (req, res) => {

    try {

        const jobs = await Job.find({

            userId: req.userId

        }).sort({ createdAt: -1 });

        res.json(jobs);

    } catch (error) {

        res.status(500).json({

            error: error.message

        });

    }

};