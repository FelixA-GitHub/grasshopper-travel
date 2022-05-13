const router = require('express').Router();
const { Job, User, Application } = require('../../models');

// GET all api/applications/
router.get('/', async (req, res) => {
    console.log('======================');
    await Application.findAll()
        .then(dbApplicationData => res.json(dbApplicationData))
        .catch(err => {
            console.logL(err);
            res.status(500).json(err);
        });
});

module.exports = router;