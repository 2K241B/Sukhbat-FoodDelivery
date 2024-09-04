import { Router } from 'express';
import {
  createUser,
  getUser,
  getUsers,
  UserUpdate,
} from '../controller/user.js';

const user = Router();

user
  .post('/create', createUser)
  .get('/getUser/:id', getUser)
  .get('/getUsers', getUsers)
  .post('/userUpdate/:id', UserUpdate);

export default user;
