const express = require('express');
const router = express.Router();
const { changePassword }= require('../controllers/profileController');

router.post('/api/change-password', changePassword);

module.exports = router;
