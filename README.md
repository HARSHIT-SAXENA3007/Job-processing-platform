# Job Processing Platform — Backend

A scalable distributed backend system for asynchronous job execution built using **Node.js, Express, MongoDB, Docker, Kubernetes, Jenkins, and New Relic**.

The platform allows authenticated users to submit jobs which are processed asynchronously by worker services. It demonstrates real-world backend architecture patterns including **microservice-style separation, CI/CD automation, containerization, and cloud deployment**.

---

# Project Overview

This backend simulates production-grade job processing systems used in:

- AI inference pipelines
- Data processing platforms
- Report generation systems
- Automation tools
- SaaS workflow engines

Users can:

- create accounts
- authenticate securely using JWT
- submit asynchronous jobs
- track job status in real time
- view historical results
- filter jobs
- view profile insights
- scale workers dynamically

---

# Key Features

## Authentication & Authorization

- Secure user signup
- JWT-based authentication
- Password hashing using bcrypt
- Protected API routes
- User-specific job isolation
- Token-based request validation

---

## Asynchronous Job Processing

- Background worker service
- Non-blocking job execution
- Real-time job status updates
- Multiple job types supported

---

## Job Lifecycle Tracking

Each job moves through the following states:


PENDING → RUNNING → COMPLETED


Workers update job progress automatically.

---

## Scalable Architecture

- Containerized using Docker
- Kubernetes deployment ready
- Horizontally scalable worker nodes
- AWS LoadBalancer exposure
- Separation of API and worker services

---

## Observability

- Integrated with New Relic
- Application monitoring
- request tracking
- performance metrics
- production debugging insights

---

## CI/CD Pipeline

- Jenkins pipeline configured
- automated testing
- automated Docker image builds
- automated deployment readiness

---

# Architecture

High-level architecture:

```
Client Application
↓
Express API Server
↓
MongoDB Database
↓
Worker Service
↓
Job Result Stored
↓
Client fetches result

```


---

# Technology Stack

## Backend Framework

- Node.js
- Express.js

## Database

- MongoDB
- Mongoose ODM

## Authentication

- JSON Web Token (JWT)
- bcrypt password hashing

## DevOps & Deployment

- Docker
- Kubernetes
- AWS EKS
- Jenkins CI/CD

## Monitoring

- New Relic APM

---

# Folder Structure

```
src/

├── config/
│ ├── db.js
│ ├── redis.js
│
├── controllers/
│ ├── authController.js
│ ├── jobController.js
│ ├── userController.js
│
├── middleware/
│ ├── authMiddleware.js
│
├── models/
│ ├── User.js
│ ├── Job.js
│
├── routes/
│ ├── authRoutes.js
│ ├── jobRoutes.js
│ ├── userRoutes.js
│
├── workers/
│ ├── jobWorker.js
│
├── tests/
│ ├── job.test.js
│
├── app.js
├── server.js
```


---

# Job Types Supported

| Job Type | Description |
|---------|------------|
| TEXT_SUMMARY | Processes textual input |
| DATA_PROCESS | Simulates data pipeline |
| ML_INFERENCE | Simulates machine learning inference |
| REPORT_GENERATION | Generates structured results |

---

# API Documentation

Base URL: http://a7eb2ec9d1e324a78bac6d79c09e1af0-1115821612.ap-south-1.elb.amazonaws.com/api


---

# Authentication APIs

## Register User


POST /api/auth/signup


Request:

```json
{
 "username": "harshit",
 "email": "harshit@email.com",
 "password": "123456"
}
```

Response:

User created successfully

Validations:

username must be unique
email must be unique
password is hashed before storing
Login User
POST /api/auth/login

Request:
```json
{
 "email": "harshit@email.com",
 "password": "123456"
}
```
Response:
```json
{
 "token": "JWT_TOKEN"
}
```

JWT token must be included in request headers for protected routes.

Job APIs
Create Job
POST /api/jobs

Headers:

Authorization: Bearer <JWT_TOKEN>

Request:

```json
{
 "type": "TEXT_SUMMARY",
 "payload": {
  "text": "Machine learning pipeline"
 }
}
```
Response:

```json
{
 "_id": "...",
 "status": "PENDING"
}
```
Get All Jobs for Logged-in User
GET /api/jobs


Returns:
```json
[
 {
  "_id": "...",
  "type": "TEXT_SUMMARY",
  "status": "COMPLETED",
  "result": "Processed successfully"
 }
]
```
Get Job By ID
GET /api/jobs/:id

Returns specific job details.

User APIs
Get Profile
GET /api/user/me

Response:
```json
{
 "username": "harshit",
 "email": "harshit@email.com",
 "jobCount": 12
}
```

# Jenkins CI/CD Pipeline

Pipeline stages:

- clone repository
- install dependencies
- run unit tests
- build Docker image
- push Docker image

Ensures code quality and deployment readiness.

# Testing

Unit tests implemented using Jest.

Run tests:

npm test

Example tests:

- create job API
- get job by ID API

Ensures reliability of core functionality.

# Monitoring

New Relic integration provides:

- request tracking
- response time monitoring
- error tracking
- performance insights

Helps identify bottlenecks in production.

# Error Handling

Handles:

- duplicate user signup
- invalid credentials
- unauthorized requests
- job not found
- worker processing failure

Returns appropriate HTTP status codes.

# Security Features

- JWT authentication 
- hashed passwords 
- protected routes
- user-specific job filtering
- environment-based configuration
