const express = require('express');
const router = express.Router();

const homeController = require('../controllers/home_controller');
const passport = require('passport');


router.get('/', passport.checkAuthentication, homeController.home);

router.use('/users', require('./users'));
router.use('/tasks', require('./tasks'));

module.exports = router;