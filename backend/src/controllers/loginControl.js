const { db } = require("../controllers/dbController");
const jwt = require("jsonwebtoken");


const loginControl = async  (req, res) => {
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
  }

  module.exports = loginControl;