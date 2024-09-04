import { Router } from 'express';
import { createUser, getUser } from '../controller/user.js';

const user = Router();

user.post('/create', createUser).get('/getUser/:id', getUser);

export default user;
