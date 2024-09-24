import { Router } from 'express';
import { createCart } from '../controller/cart.js';

const cart = Router();

cart.post('/create', createCart);

export default cart;
