const path = require('path');
const router = require('express').Router();
const apiRoutes = require('./apiRoutes');
// include api routes const

// se up route for app
router.use('/api', apiRoutes);

// router.use((req, res) => res.sendFile(path.join(__dirname, 'build', 'index.html')));
router.use((req, res) => res.sendFile(path.join(__dirname, '../client/build/index.html')));

module.exports = router;
