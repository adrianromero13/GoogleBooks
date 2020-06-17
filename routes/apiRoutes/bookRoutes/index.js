const router = require('express').Router();
// import controller files
const { findAll, create, update, findById, remove } = require('../../../controllers/bookController');

// set up controller
router.route('/')
  .get(findAll)
  .post(create);

router.route('/:id')
  .get(findById)
  .put(update)
  .delete(remove);

module.exports = router;
