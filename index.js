const express = require("express");
const app = express();
const cors = require("cors");
const crypto = require("crypto-js");
const crpt = require("crypto");
const User = require("./models/userModel");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
app.use(cors());
app.use(express.json());
const sendEmail = require("./utils/sendEmail");
const topic = require("./models/topic");
const user = require("./models/userModel");
require("dotenv").config();

mongoose.connect(
  "mongodb+srv://shree:shree123@cluster0.unxuh6s.mongodb.net/?retryWrites=true&w=majority"
);


app.post("/login", async (req, res) => {
  const user = await User.findOne({
    email: req.body.email,
  });
  if (user) {
    if (req.body.password === user.password) {
      const token = jwt.sign(
        {
          name: user.name,
          email: user.email,
        },
        "secret123"
      );
      return res.status(200).json({ status: "ok", user: token });
    } else {
      return res.status(300).json({ status: "Invalid Password", user: null });
    }
  } else {
    return res.status(300).json({ status: "User Not Registered" });
  }
});

app.post("/upload", async (req, res) => {
  topic.create(req.body, (err, data) => {
    if (err) {
      console.log(err);
      res.json({ status: "error" });
    } else {
      res.json({data,status:"ok"});
    }
  });
});

app.post("/details", async (req, res) => {
  console.log(req.body);
  topic.find(req.body, (err, data) => {
    if (err) {
      console.log(err);
      res.json({ status: "error" });
    } else {
      res.json({ data, status: "ok" });
    }
  });
});

app.post("/register", async (req, res) => {
  user.create(req.body, (err, data) => {
    if (err) {
      console.log(err);
      res.json({ status: "error" });
    } else {
      res.json({ status: "ok" });
    }
  });
});

app.get("/get/:type", async (req, res) => {
  user.find({ role: req.params.type }, (err, data) => {
    if (err) {
      console.log(err);
      res.json({ status: "error" });
    } else {
      res.json({ data, status: "ok" });
    }
  });
});

app.get("/getUser/:email", async (req, res) => {
  user.find({ email: req.params.email }, (err, data) => {
    if (err) {
      console.log(err);
      res.json({ status: "error" });
    } else {
      res.json({ data, status: "ok" });
    }
  });
});

app.get("/getTopic/:std/:sub", async (req, res) => {
  topic.find({ standard: req.params.std, subject: req.params.sub }, (err, data) => {
    if (err) {
      console.log(err);
      res.json({ status: "error" });
    } else {
      res.json({ data, status: "ok" });
    }
  });
});

app.get("/getteachercourses/:id", async (req, res) => {
  topic.find({ teacher: req.params.id }, (err, data) => {
    if (err) {
      console.log(err);
      res.json({ status: "error" });
    } else {
      res.json({ data, status: "ok" });
    }
  });
});

module.exports = app.listen(5000, () => {
  console.log("server started");
});
