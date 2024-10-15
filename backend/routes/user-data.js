const express = require('express');
const router = express.Router();

const emailController = require('../controllers/email-controller.js');
const URLS = require('./urls.js')

// Middleware function for logging
const logDateTime = (req, res, next) => {
    console.log(`[${new Date()}] ${req.method} ${req.url}`);
    next();
};
router.use(logDateTime);

router.post(URLS.SEND_CONTACT_EMAIL, (req, res) => {
    emailController.sendContactEmail(req, res);
});

module.exports = router;