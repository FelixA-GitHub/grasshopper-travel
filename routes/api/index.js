//dependencies
//this file collects all the API routes and packages them up
//packaged all up for server.js
const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const postRoutes = require('./post-routes.js');
const descriptionRoutes = require('./description-routes.js');

router.use('/user', userRoutes);
router.use('/post', postRoutes);
router.use('/description', descriptionRoutes);

module.exports = router;