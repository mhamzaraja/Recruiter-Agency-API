const { sequelize } = require('./models');
const express = require('express');
const cors = require('cors');
const candidateRouter = require('./routers/candidateRouter');
const port = 3000;
const app = express();

//body parser
app.use(express.json());

// app.use(cors());

//configure routes
app.use('/candidates', candidateRouter);

app.get('/', (req, res) => { res.send('default route'); })

app.listen(port, async () => {
    console.log(`server listening on port ${port}`);
    try {
        await sequelize.authenticate();
        console.log("Database connected!");
    } catch (ex) {
        console.log("app-js", ex);
    }
});