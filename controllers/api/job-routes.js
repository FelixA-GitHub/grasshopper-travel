const router = require('express').Router();
const { Job, User } = require('../../models');

// GET all api/jobs/
router.get('/', async (req, res) => {
  console.log('======================');
  await Job.findAll()
    .then(dbJobData => res.json(dbJobData))
    .catch(err => {
      console.logL(err);
      res.status(500).json(err);
    });
});

// GET api/jobs/:id
router.get('/:id', async (req, res) => {
  try {
    const job = await Job.findOne({
      where: {
        id: req.params.id
      }
    });
    return res.status(200).json({ data: job.dataValues });
  }
  catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

//POST api/jobs/create/
router.post('/create', async (req, res) => {
  try {
    const newJob = await Job.create({
      title: req.body.title,
      location: req.body.location,
      job_description: req.body.description,
      salary: req.body.salary,
      job_type: req.body.type,
      duration: req.body.duration,
      created_by: req.session.userId,
      post_date: new Date()
    })
    return res.status(200).json(newJob);
  }
  catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// UPDATE job by id api/job/:id
router.put('/:id', (req, res) => {
  // pass in req.body instead to only update what's passed through
  Job.update(req.body, {
    individualHooks: true,
    where: {
      id: req.params.id
    }
  })
    .then(dbJobData => {
      if (!dbJobData) {
        res.status(404).json({ message: 'No job found with this id' });
        return;
      }
      res.json(dbJobData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// DELETE job by id api/job/:id
router.delete('/:id', (req, res) => {
  Job.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbJobData => {
      if (!dbJobData) {
        res.status(404).json({ message: 'No job found with this id' });
        return;
      }
      res.json(dbJobData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});


router.get('/query/:id', (req, res) => {
  Job.findAll({
    where: {
      created_by: req.params.id,
    }
  })
    .then(dbJobData => res.json(dbJobData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});


module.exports = router;
