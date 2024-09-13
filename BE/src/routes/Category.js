import { Router } from 'express';
import {
  categoryUpdate,
  createCategory,
  getCategories,
} from '../controller/category.js';

const category = Router();

category
  .post('/create', createCategory)
  .get('/getCategories', getCategories)
  .put('/categoryUpdate/:id', categoryUpdate);

export default category;
