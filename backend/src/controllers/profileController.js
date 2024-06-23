const bcrypt = require('bcrypt');
const User = require('../models/user');

const changePassword = async (req, res) => {
  try {
    const { userId, currentPassword, newPassword } = req.body;

    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    const isMatch = await bcrypt.compare(currentPassword, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: 'Current password is incorrect' });
    }

    if (newPassword.length < 8) {
      return res.status(400).json({ error: 'Password must be at least 8 characters long' });
    }

    user.password = await bcrypt.hash(newPassword, 10);
    await user.save();

    res.status(200).json({ message: 'Password changed successfully' });
  } catch (error) {
    console.error('Error changing password:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getUserScore = async (req, res) => {

  try {
    console.log('getting user score');
    const {userId} = req.body;
    console.log(userId)
    const user = await User.findOne({ _id: userId });
    console.log('user: ', user)
    console.log('user score: ', user.score)
    res.status(200).json({score: user.score});
  } catch(e) {
    console.error("Error fetching user score:", e);
    res.status(500).json({ error: "Internal Server Error" });
  
  }
};

const addUserScore = async (req, res) => {

  try {
    console.log('updating user score')
    const {userId, score} = req.body;
    const user = await User.findOne({ _id: userId });
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    user.score += score;
    await user.save();
    res.status(200).json({message: "Score updated successfully"});
  
  } catch(e) {
    console.error("Error updating user score:", e);
    res.status(500).json({ error: "Internal Server Error" });
  
  }
}

const listAllScores = async (req, res) => {
  try {
    const users = await User.find({}, 'name score').sort({ score: 1 });
    const scores = users.map(user => ({
      name: user.name,
      score: user.score
    }));
    res.status(200).json({ scores });
  } catch (e) {
    console.error("Error listing all scores:", e);
    res.status(500).json({ error: "Internal Server Error" });
  }
};


module.exports = {
  changePassword, getUserScore, addUserScore, listAllScores
};
