const bcrypt = require("bcrypt");
const User = require("../models/user")

const registerControl = async (req, res) => {
  try {
    const { name, email, password, password_confirmation } = req.body;

    if (!name || !email || !password || !password_confirmation) {
      return res.status(400).json({
        error: "Incomplete data. Please provide all required fields.",
      });
    }

    if (password.length < 8) {
      return res
        .status(400)
        .json({ error: "Password must be at least 8 characters long." });
    }

    if (password !== password_confirmation) {
      return res
        .status(400)
        .json({ error: "Password and password confirmation do not match." });
    }

    const existingUser = await User.findOne({ email }).exec();
    if (existingUser) {
      return res
        .status(400)
        .json({ error: "User with this email already exists." });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });
    await newUser.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Error registering user", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = registerControl;
