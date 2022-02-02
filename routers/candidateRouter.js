const express = require('express');
const router = express.Router();
const candidateController = require('../controllers/candidateController');

router.get('/', candidateController.getAllCandidates);
router.get('/:uuid', candidateController.getCandidateById);
router.delete('/:uuid', candidateController.deleteCandidate);
router.put('/:uuid', candidateController.updateCandidate);
router.post('/', candidateController.saveCandidate);

module.exports = router;
