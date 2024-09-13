import { Router } from 'express';
import { createFood, getFood, getFoods } from '../controller/food.js';

const food = Router();

food
  .post('/create', createFood)
  .get('/getFoods', getFoods)
  .get('/getFood/:id', getFood);

export default food;
