const jwt = require("jsonwebtoken");
const User = require("../models/user");
const bcrypt = require("bcrypt");

const loginControl = async (req, res) => {
  try {
    const { email, password } = req.body;
    
    const user = await User.findOne({ email }).exec();

    if (!user) {
      return res.status(400).json({ error: "User not found." });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(400).json({ error: "Incorrect password." });
    }

    const token = jwt.sign({ id: user._id, email: user.email }, "sercret_key", {
      expiresIn: "1h",
    });


    res.status(200).json({
      token,
      account: {
        username: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    console.error("Error logging in user", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = loginControl;
