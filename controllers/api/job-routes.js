const router = require('express').Router();
const { Job } = require('../../models');

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
            post_date: new Date()
        })

        res.status(200).json(newJob);
    }
    catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
    
});

module.exports = router;
