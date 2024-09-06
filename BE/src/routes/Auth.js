import { Router } from 'express';
import { CookieCheck, Login } from '../controller/auth.js';

const auth = Router();

auth.post('/login', Login).get('/verify', CookieCheck);

export default auth;
