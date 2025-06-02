// const express = require("express");
// const mysql = require("mysql");
// const bodyParser = require("body-parser");
// const cors = require("cors");

// convert to ESM modern syntax
import express from "express";
import mysql from "mysql2";
import bodyParser from "body-parser";
import cors from "cors";
const app = express();

app.use(cors());
app.use(bodyParser.json());

// DB CONNECTION

const db = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "1234",
  database: "user_auth",
});

db.connect((err) => {
  if (err) throw err;
  console.log("Connected to MySQL database");
});

// Login

app.post("/login", (req, res) => {
  const { username, password } = req.body;
  const sql = "SELECT * FROM users WHERE username = ? AND password = ?";

  db.query(sql, [username, password], (err, results) => {
    if (err)
      return res.status(500).json({ success: false, message: "Server error" });

    if (results.length > 0) {
      res.json({ success: true });
    } else {
      res
        .status(401)
        .json({ success: false, message: "Invalid username or password" });
    }
  });
});

// Signup

app.post("/signup", (req, res) => {
  const { username, password } = req.body;
  const sql = "INSERT INTO users (username, password) VALUES (?, ?)";

  db.query(sql, [username, password], (err, results) => {
    if (err) {
      if (err.code === "ER_DUP_ENTRY") {
        return res.status(409).send("Username already exists");
      }
      return res.status(500).send("Server error");
    }
    res.send("Signup successful!");
  });
});

// Run Server
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
