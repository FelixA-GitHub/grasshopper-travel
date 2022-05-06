const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const postRoutes = require('./post-routes.js');
const descriptionRoutes = require('./description-routes');

router.use('/user', userRoutes);
router.use('/post', postRoutes);
router.use('/description', descriptionRoutes);

module.exports = router;