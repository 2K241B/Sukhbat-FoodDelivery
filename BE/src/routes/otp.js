import { Router } from 'express';
import { CheckOTP, createOTP } from '../controller/otp.js';

const otp = Router();

otp.post('/create', createOTP).post('/check', CheckOTP);

export default otp;
