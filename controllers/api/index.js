const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const jobRoutes = require('./job-routes.js');
const applicationRoutes = require('./application-routes');

router.use('/user', userRoutes);
router.use('/jobs', jobRoutes);
router.use('/applications', applicationRoutes);

module.exports = router;