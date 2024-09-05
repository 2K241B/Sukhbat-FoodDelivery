import { Router } from 'express';
import {
  createUser,
  getUser,
  getUsers,
  userDelete,
  UserUpdate,
} from '../controller/user.js';
import { Login } from '../controller/auth.js';

const user = Router();

user
  .post('/create', createUser)
  .get('/getUser/:id', getUser)
  .get('/getUsers', getUsers)
  .put('/userUpdate/:id', UserUpdate)
  .delete('/userDelete/:id', userDelete)
  .post('/login', Login);

export default user;
