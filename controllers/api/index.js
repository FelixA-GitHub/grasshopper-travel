const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const jobRoutes = require('./job-routes.js');

router.use('/user', userRoutes);
router.use('/jobs', jobRoutes);

module.exports = router;