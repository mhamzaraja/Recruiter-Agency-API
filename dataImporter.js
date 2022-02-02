const { sequelize, candidate } = require('./models');

const express = require('express');
const port = 30002;
const app = express();


app.use(express.json());
app.get('/candidates', async (req, res) => {
    try {
        const c = await candidate.findAll();
        return res.json(c);
    } catch (ex) {
        console.log("ImportData-dataImporter", ex);
        return res.status(500).json({ error: "Something went wrong!" });
    }

});

app.get('/candidates/:uuid', async (req, res) => {
    const uuid = req.params.uuid;
    try {
        const c = await candidate.findOne({where: { uuid }});
        return res.json(c);
    } catch (ex) {
        console.log("ImportData-dataImporter", ex);
        return res.status(500).json({ error: "Something went wrong!" });
    }

});

app.delete('/candidates/:uuid', async (req, res) => {
    const uuid = req.params.uuid;
    try {
        const c = await candidate.findOne({
            where: { uuid }
        });
        await c.destroy();
        return res.json({ message: " user deleted! " });
    } catch (ex) {
        console.log("ImportData-dataImporter", ex);
        return res.status(500).json({ error: "Something went wrong!" });
    }

});

app.put('/candidates/:uuid', async (req, res) => {
    const uuid = req.params.uuid;
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
    } = req.body;

    try {
        const c = await candidate.findOne({
            where: { uuid }
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

        await c.save();
        return res.json(c);
    } catch (ex) {
        console.log("ImportData-dataImporter", ex);
        return res.status(500).json({ error: "Something went wrong!" });
    }

});


app.post('/candidates', async (req, res) => {
    try {
        await candidate.create(req.body);
    } catch (ex) {
        console.log("ImportData-dataImporter", ex);
        return res.status(500).json(ex);
    }

    res.send('ok');
});


app.listen(port, async () => {
    console.log(`server listening on port ${port}`);
    await sequelize.authenticate();
    console.log("Database connected!")
})