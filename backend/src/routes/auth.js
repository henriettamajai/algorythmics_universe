const express = require("express");
const router = express.Router();
const { db } = require("../controllers/dbController");
const jwt = require("jsonwebtoken");

router.post("/api/login", async (req, res) => {
  try {

    console.log("client", db);
    const database = db.client.db("algouniverse");
    const collection = database.collection("UserCollection");

    const user = await collection.findOne({ email: req.body.email });
    console.log("user from db ", user);
    console.log("user from db ", user.username);

    // If user not found, return 400 Bad Request
    if (!user) {
      return res.status(400).json({ error: "Invalid email or password" });
    }
    if (req.body.password !== user.password) {
      return res.status(400).json({ error: "Invalid email or password" });
    }

    const token = jwt.sign({ email: user.email }, "your_secret_key", {
      expiresIn: "1h",
    });
    res
      .status(200)
      .json({ token, account: { username: user.username, email: user.email } });
  } catch (error) {
    console.error("Error logging in user", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.post("/api/register", async (req, res) => {
  try {
    const formData = req.body;
    console.log(formData);

    if (
      !req.body.name ||
      !req.body.email ||
      !req.body.password ||
      !req.body.password_confirmation
    ) {
      return res.status(400).json({
        error: "Incomplete data. Please provide all required fields.",
      });
    }

    if (req.body.password.length < 8) {
      return res
        .status(400)
        .json({ error: "Password must be at least 8 characters long." });
    }

    if (req.body.password !== req.body.password_confirmation) {
      return res
        .status(400)
        .json({ error: "Password and password confirmation do not match." });
    }


    const database = db.client.db("algouniverse");
    const collection = database.collection("UserCollection");

    // Prepare user document
    const userDocument = {
      username: req.body.name,
      email: req.body.email,
      password: req.body.password,
    };

    // Insert user into the database
    const result = await collection.insertOne(userDocument);
    console.log(`A document was inserted with the _id: ${result.insertedId}`);

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Error registering user", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
