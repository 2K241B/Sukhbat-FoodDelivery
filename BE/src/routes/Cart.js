import { Router } from 'express';
import {
  createCart,
  deleteCarts,
  getCart,
  getCarts,
} from '../controller/cart.js';

const cart = Router();

cart
  .post('/create', createCart)
  .get('/getCart/:id', getCart)
  .get('/getCarts', getCarts)
  .delete('/deleteCart/:id', deleteCarts);

export default cart;
