import { Router } from 'express';
import { createUser } from '../controller/user.js';

const user = Router();

user.post('/create', createUser);

export default user;
