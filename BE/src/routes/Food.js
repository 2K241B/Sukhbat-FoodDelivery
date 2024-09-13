import { Router } from 'express';
import { createFood, getFoods } from '../controller/food.js';

const food = Router();

food.post('/create', createFood).get('/getFoods', getFoods);

export default food;
