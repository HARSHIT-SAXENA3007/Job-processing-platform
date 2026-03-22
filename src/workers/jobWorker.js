const mongoose = require("mongoose");
require("dotenv").config();

const Job = require("../models/Job");

const connectDB = require("../config/db");


const processJobs = async () => {

  const pendingJobs = await Job.find({ status: "PENDING" });

  for (const job of pendingJobs) {

    console.log("Processing job:", job._id);

    job.status = "RUNNING";

    await job.save();


    /*
    simulate processing time
    */
    await new Promise(resolve => setTimeout(resolve, 3000));


    job.status = "COMPLETED";

    job.result = "Processed successfully";

    await job.save();


    console.log("Completed job:", job._id);

  }

};


const startWorker = async () => {

  await connectDB();

  console.log("Worker started...");


  setInterval(processJobs, 5000);

};


startWorker();