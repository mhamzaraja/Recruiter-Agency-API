const CandidateRepository = require('../repository/candidateRepository');
const candidateRepo = new CandidateRepository();

module.exports = {
    getAllCandidates: async (req, res) => {
        // let status = res.status(500).json({ error: "Something went wrong!" });
        try{
            let candidate = await candidateRepo.getAllCandidates();
            res.json(candidate);
        }catch (ex){
            console.log(ex);
        }
    },
    getCandidateById: async (req, res) => {
        // let status = res.status(500).json({ error: "Something went wrong!" });
        try{
            let candidate = await candidateRepo.getCandidateById(req.params.uuid);
            res.json(candidate);
        }catch (ex){
            console.log(ex);
        }
    },
    deleteCandidate: async (req, res) => {
        // let status = res.status(500).json({ error: "Something went wrong!" });
        try{
            let candidate = await candidateRepo.deleteCandidate(req.params.uuid);
            res.json(candidate);
        }catch (ex){
            console.log(ex);
        }
    },
    updateCandidate: async (req, res) => {
        // let status = res.status(500).json({ error: "Something went wrong!" });
        try{
            let candidate = await candidateRepo.updateCandidate(req.params.uuid, req.body);
            res.json(candidate);
        }catch (ex){
            console.log(ex);
        }
    },
    saveCandidate: async (req, res) => {
        // let status = res.status(500).json({ error: "Something went wrong!" });
        try{
            let candidate = await candidateRepo.saveCandidate(req.params.uuid, req.body);
            res.json(candidate);
        }catch (ex){
            console.log(ex);
        }
    }
}