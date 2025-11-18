import 'dotenv/config';
import express from 'express'
const app = express();
const PORT = process.env.PORT ?? 8000;

import userRouter from './routes/user.routes.js'
import urlRouter from './routes/url.routes.js'
import { authenticationMiddleware } from './middlewares/auth.middleware.js';

app.use(express.json());


app.get("/", (req, res) => {
  return res.json({ status: 'server is up and running' });
});

app.use('/user', userRouter);  


app.use(authenticationMiddleware);
app.use(urlRouter);            

app.listen(PORT, () => {
  console.log('Server is running on port 8000');
});