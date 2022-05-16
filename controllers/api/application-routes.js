const router = require('express').Router();
const { Job, User, Application } = require('../../models');

// GET all api/applications/
router.get('/', async (req, res) => {
    console.log('======================');
    await Application.findAll()
        .then(dbApplicationData => res.json(dbApplicationData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// GET single /api/my-apps by id
router.get('/:id', (req, res) => {
    Application.findAll({
      attributes: { exclude: ['password'] },
      where: {
        job_id: req.params.id
      }
    })
      .then(dbApplicationData => {
        if (!dbApplicationData) {
          res.status(404).json({ message: 'No Application found' });
          return;
        }
        res.json(dbApplicationData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

//POST /api/my-apps/
router.post('/', async (req, res) => {
  try {
    const newApp = await Application.create({
      applied: true,
      user_id: req.session.userId,
      job_id: req.body.job_id
    })
    return res.status(200).json(newApp);
  }
  catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// DELETE application by id api/my-apps/:id
router.delete('/:id', (req, res) => {
    Application.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(dbApplicationData => {
        if (!dbApplicationData) {
          res.status(404).json({ message: 'No Application found with this id' });
          return;
        }
        res.json(dbApplicationData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

module.exports = router;