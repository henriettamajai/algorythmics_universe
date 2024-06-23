const express = require('express');
const router = express.Router();
const { changePassword, getUserScore, addUserScore, listAllScores }= require('../controllers/profileController');

router.post('/api/change-password', changePassword);
router.post('/api/addUserScore', addUserScore);
router.post('/api/getUserScore', getUserScore);
router.get('/api/listAllScores', listAllScores);

module.exports = router;
