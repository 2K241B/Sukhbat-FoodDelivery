import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import { Connect } from './utills/db.js';
import user from './routes/User.js';
import auth from './routes/Auth.js';
import { sendMail } from './controller/mail.js';
import category from './routes/Category.js';
import food from './routes/Food.js';

dotenv.config();

const app = express();

app.use(bodyParser.json());
app.use(
  cors({
    credentials: true,
    origin: 'http://localhost:3000',
  })
);

const PORT = process.env.PORT;

app.use('/user', user);
app.use('/auth', auth);
app.get('/sendMail', sendMail);
app.use('/category', category);
app.use('/food', food);

app.listen(PORT, () => {
  Connect(process.env.MONGODB_CONNECTION_STRING);
  console.log('listening port', PORT);
});
