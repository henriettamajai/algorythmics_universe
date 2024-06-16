const express = require('express');
const router = express.Router();
const profileController = require('../controllers/profileController');

router.post('/change-password', profileController.changePassword);

module.exports = router;
