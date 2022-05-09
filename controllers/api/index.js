const router = require('express').Router();

const consultantRoutes = require('./consultant-routes.js');
const employerRoutes = require('./employer-routes.js');
const postRoutes = require('./post-routes');
const jobRoutes = require('./job-routes');

router.use('/consultant', consultantRoutes);
router.use('/employer', employerRoutes);
router.use('/post', postRoutes);
router.use('/job', jobRoutes);

module.exports = router;