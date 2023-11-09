const router = require('express').Router();

const user_controller = require('../controllers/user_controller');

// Register user
router.post('/register', user_controller.register);

module.exports = router;