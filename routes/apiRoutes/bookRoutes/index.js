const router = require('express').Router();
// import controller files
const bookController = require('../../../controllers/bookController');

// set up controller
router.route('/books');

module.exports = router;
