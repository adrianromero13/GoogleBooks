const path = require('path');
const router = require('express').Router();
// include api routes const

// se up route for app

router.use((req, res) =>
  res.sendFile(path.join(__dirname, '../client/build/index.html'))
);

module.exports = router;
