const { candidate } = require('../models');

class candidateRepository {
    constructor() {

    }

    async getCandidateById(id) {
        let c;
        try {
            c = await candidate.findOne({
                where: { uuid: id }
            });
        } catch (ex) {
            console.log("candidate repository", ex);
        }
        return c;
    }

    async getCandidateByEmail(email) {
        let candidateByEmail;
        try {
            await candidate.findOne({
                where: { email }
            });
        } catch (ex) {
            console.log("candidate repository", ex);
        }
    }

    async getAllCandidates() {
        let c;
        try {
            c = await candidate.findAll();
        } catch (ex) {
            console.log("candidate repository", ex);
        }
        return c;
    }

    async deleteCandidate(id) {
        let c;
        try {
            c = await candidate.findOne({
                where: { uuid: id }
            });
            await c.destroy();
        } catch (ex) {
            console.log("candidate repository", ex);
        }
        return ({ message: " user deleted! " });
    }

    async updateCandidate(id, body) {
        let cupdated;
        const {
            name,
            email,
            password,
            dob,
            gender,
            marital_status,
            nationality,
            cnic,
            city,
            area,
            mobile_number,
            career_level,
            experience,
            expected_salary,
            summary,
        } = body;

        console.log(body);

        try {
            const c = await candidate.findOne({
                where: { uuid: id }
            });

            c.name = name;
            c.email = email;
            c.password = password;
            c.dob = dob;
            c.gender = gender;
            c.marital_status = marital_status;
            c.nationality = nationality;
            c.cnic = cnic;
            c.city = city;
            c.area = area;
            c.mobile_number = mobile_number;
            c.career_level = career_level;
            c.experience = experience;
            c.expected_salary = expected_salary;
            c.summary = summary;

            cupdated = await c.save();
        } catch (ex) {
            console.log("candidate repository", ex);
        }
        return cupdated;
    }

    async saveCandidate(id, body) {
        try {
            await candidate.create(body);
        } catch (ex) {
            console.log("candidate repository", ex);
        }
    }
}

module.exports = candidateRepository;