const router = require('express').Router();

const consultantRoutes = require('./consultant-routes.js');
const employerRoutes = require('./employer-routes.js');
const postRoutes = require('./post-routes.js');
const descriptionRoutes = require('./description-routes');

router.use('/consultant', consultantRoutes);
router.use('/employer', employerRoutes);
router.use('/post', postRoutes);
router.use('/description', descriptionRoutes);

module.exports = router;