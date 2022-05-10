const router = require('express').Router();
const { Job, User } = require('../../models');

//POST api/jobs/create/
router.post('/create', async (req, res) => {
    console.log(req.body);
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
        console.log(newJob.dataValues.id);
        return res.status(200).json(newJob);
    }
    catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// GET api/jobs/:id
router.get('/:id', async (req, res) => {
    try {
        const job = await Job.findOne({
            where: {
                id: req.params.id
            }
        });
        console.log(job.dataValues);
        return res.status(200).json({data: job.dataValues});
    }
    catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
});

module.exports = router;
