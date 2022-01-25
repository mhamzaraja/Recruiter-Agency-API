const Jobs = require('../models/jobs');

module.exports = {
    getJobs: (req, res) => {
        let jobs = new Jobs(1, "test jobs", "test description");
        res.json(jobs);
    },
    getJobsById: (req, res) => {
        console.log("with params", req.params);
        let jobs = new Jobs(2, "test jobs", "test description");
        res.send(jobs);
    },
    saveJobs: (req, res) => {
        console.log(req.body);
        res.send('ok');
    }
}