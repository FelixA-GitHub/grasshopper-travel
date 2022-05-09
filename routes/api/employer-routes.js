const router = require('express').Router();
const { Employer, Post, Job, Search } = require('../../models');

// get all employers
router.get('/', (req, res) => {
    Employer.findAll({
        attributes: { exclude: ['password'] }
    })
        .then(dbEmployerData => res.json(dbEmployerData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// get user by id


// post/create/register
router.post('/', (req, res) => {
    // expects {username: 'TinyTim', email: 'tinytim@gmail.com', password: 'password1234'}
    Employer.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    })
        .then(dbEmployerData => res.json(dbEmployerData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// post /login findOne with password check
router.post('/login', (req, res) => {
    // expects {username: 'TinyTim', email: 'tinytim@gmail.com', password: 'password1234'}
    Employer.findOne({
        where: {
            email: req.body.email
        }
    }).then(dbEmployerData => {
        if (!dbEmployerData) {
            res.status(400).json({ message: 'No employer with that email address!' });
            return;
        }

        const validPassword = dbEmployerData.checkPassword(req.body.password);

        if (!validPassword) {
            res.status(400).json({ message: 'Incorrect password!' });
            return;
        }

        res.json({ user: dbEmployerData, message: 'You are now logged in!' });
    });
});

// put/update 

// delete user by id
module.exports = router;