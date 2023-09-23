import express from 'express';
import userRoute from './src/routes/user.route.js';
const app = express();


app.use('/soma', userRoute);

app.listen(3000)