import express from 'express';
import userRouter from './routes/userRoute.js';
import taskRouter from './routes/taskRoute.js';

const app = express();
const port = 8080;
const host = 'localhost';

app.use(express.json());

app.use('/', userRouter);
app.use('/', taskRouter);

app.listen(port, host, () => {
 console.log(`Server is running at http://${host}:${port}`);
});
