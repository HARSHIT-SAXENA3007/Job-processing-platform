const request = require("supertest");

const mongoose = require("mongoose");

const app = require("../app");

require("dotenv").config();


beforeAll(async () => {

  await mongoose.connect(process.env.MONGO_URI);

});


afterAll(async () => {

  await mongoose.connection.close();

});


describe("Job API", () => {

  let jobId;


  test("POST /api/jobs should create job", async () => {

    const res = await request(app)
      .post("/api/jobs")
      .send({
        type: "TEXT_SUMMARY",
        payload: { text: "test job" }
      });


    expect(res.statusCode).toBe(201);

    expect(res.body.status).toBe("PENDING");


    jobId = res.body.jobId;

  });



  test("GET /api/jobs/:id should return job", async () => {

    const res = await request(app)
      .get(`/api/jobs/${jobId}`);


    expect(res.statusCode).toBe(200);

    expect(res.body._id).toBe(jobId);

  });


});