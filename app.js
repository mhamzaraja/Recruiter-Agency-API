const express = require('express');
const cors = require('cors');
const connectDb = require('./config/db');
const app = express();
connectDb();
const userRouter = require('./routers/userRouter');
const jobsRouter = require('./routers/jobsRouter');
const authRouter = require('./routers/authrouter');
const errorHandler = require('./middleware/error');
const port = 3000;

//body parser
app.use(express.json());

app.use(cors());

//configure routes
app.use('/user', userRouter);
app.use('/jobs', jobsRouter);
app.use('/auth', authRouter);

app.get('/', (req, res, next) => { res.send('default route'); })

app.use(errorHandler);

app.listen(port, () => {
    console.log(`server listening on port ${ port }`);
})