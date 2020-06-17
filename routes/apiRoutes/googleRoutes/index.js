const router = require('express').Router();
// import controller files
const { findAll } = require('./../../../controllers/googleController');

// set up controller routes
router.route('/')
    .get(findAll);

module.exports = router;
