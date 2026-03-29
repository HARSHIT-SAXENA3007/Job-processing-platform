const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      required: true,
    },
    payload: {
      type: Object,
      required: true,
    },
    status: {
      type: String,
      enum: ["PENDING", "RUNNING", "COMPLETED", "FAILED"],
      default: "PENDING",
    },
    result: {
      type: String,
    },
    error: {
      type: String,
    },
    userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Job", jobSchema);