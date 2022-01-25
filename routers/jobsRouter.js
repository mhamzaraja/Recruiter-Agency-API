const express = require('express');
const router = express.Router();
const jobsController = require('../controllers/jobsController');

router.get('/', jobsController.getJobs);
router.get('/:jobId', jobsController.getJobsById);
router.post('/:jobId', jobsController.saveJobs);

module.exports = router;