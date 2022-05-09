//dependencies
//this file collects all the API routes and packages them up
//packaged all up for server.js
const router = require('express').Router();
const consultantRoutes = require('./consultant-routes.js');
const postRoutes = require('./post-routes.js');
const jobRoutes = require('./job-routes.js');
const employerRoutes = require('./employer-routes')

router.use('/consultant', consultantRoutes);
router.use('/post', postRoutes);
router.use('/job', jobRoutes);
router.use('/employer', employerRoutes);

module.exports = router;