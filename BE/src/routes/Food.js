import { Router } from 'express';
import {
  createFood,
  FoodUpdate,
  getFood,
  getFoods,
} from '../controller/food.js';

const food = Router();

food
  .post('/create', createFood)
  .get('/getFoods', getFoods)
  .get('/getFood/:id', getFood)
  .put('/foodUpdate/:id', FoodUpdate);

export default food;
