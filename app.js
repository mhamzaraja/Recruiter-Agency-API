const express = require('express');
const app = express();
const userRouter = require('./routers/userRouter');
const jobsRouter = require('./routers/jobsRouter');
const port = 3000;

//body parser
app.use(express.json());
app.use('/user', userRouter);
app.use('/jobs', jobsRouter);

app.get('/', (req, res, next) => { res.send('default route'); })

app.listen(port, () => {
    console.log(`server listening on port ${ port }`);
})