import { Router } from 'express';
import { createUser, getUser, getUsers } from '../controller/user.js';

const user = Router();

user
  .post('/create', createUser)
  .get('/getUser/:id', getUser)
  .get('/getUsers', getUsers);

export default user;
