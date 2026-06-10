const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion } = require("mongodb");
const path = require("path");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 5000;

const client = new MongoClient(process.env.MONGO_URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

let usersCollection;
let jobsCollection;

async function start() {
  await client.connect();

  const db = client.db("jobportal");

  usersCollection = db.collection("users");
  jobsCollection = db.collection("jobs");

  console.log("MongoDB connected");
  

  
  

  app.post("/signup", async (req, res) => {
    const { email, password } = req.body;

    const exists = await usersCollection.findOne({ email });
    if (exists) return res.status(400).send({ message: "User exists" });

    await usersCollection.insertOne({ email, password });

    res.send({ message: "Signup success" });
  });

  app.post("/login", async (req, res) => {
    const { email, password } = req.body;

    const user = await usersCollection.findOne({ email, password });
    if (!user) return res.status(400).send({ message: "Invalid login" });

    res.send({ user });
  });

  app.post("/post-job", async (req, res) => {
    const job = req.body;
    const result = await jobsCollection.insertOne(job);
    res.send(result);
  });

  app.get("/all-jobs", async (req, res) => {
    const jobs = await jobsCollection.find({}).toArray();
    res.send(jobs);
  });

  app.get("/my-jobs/:email", async (req, res) => {
    const jobs = await jobsCollection
      .find({ createdBy: req.params.email })
      .toArray();

    res.send(jobs);
  });

  //START SERVER 

  app.listen(port, () => {
    console.log("Server running on", port);
  });
}

start();
