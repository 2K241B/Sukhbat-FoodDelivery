import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import { Connect } from './utills/db.js';
import user from './routes/User.js';

dotenv.config();

const app = express();

app.use(bodyParser.json());
app.use(cors());

const PORT = process.env.PORT;

app.use('/user', user);

app.listen(PORT, () => {
  Connect(process.env.MONGODB_CONNECTION_STRING);
  console.log('listening port', PORT);
});
