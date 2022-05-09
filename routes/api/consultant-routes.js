const router = require('express').Router();
const { Consultant, Post, Job, Search } = require('../../models');

// get all users
router.get('/', (req, res) => {
    Consultant.findAll({
        attributes: { exclude: ['password'] }
    })
        .then(dbConsultantData => res.json(dbConsultantData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// get user by id


// post/create/register
router.post('/', (req, res) => {
    // expects {username: 'TinyTim', email: 'tinytim@gmail.com', password: 'password1234'}
    Consultant.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    })
        .then(dbConsultantData => res.json(dbConsultantData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// post /login findOne with password check
router.post('/login', (req, res) => {
    // expects {username: 'TinyTim', email: 'tinytim@gmail.com', password: 'password1234'}
    Consultant.findOne({
        where: {
            email: req.body.email
        }
    }).then(dbConsultantData => {
        if (!dbConsultantData) {
            res.status(400).json({ message: 'No user with that email address!' });
            return;
        }

        const validPassword = dbConsultantData.checkPassword(req.body.password);

        if (!validPassword) {
            res.status(400).json({ message: 'Incorrect password!' });
            return;
        }

        res.json({ user: dbConsultantData, message: 'You are now logged in!' });
    });
});

// put/update 

// delete user by id
module.exports = router;