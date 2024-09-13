import { Router } from 'express';
import {
  categoryDelete,
  categoryUpdate,
  createCategory,
  getCategories,
} from '../controller/category.js';

const category = Router();

category
  .post('/create', createCategory)
  .get('/getCategories', getCategories)
  .put('/categoryUpdate/:id', categoryUpdate)
  .delete('/categoryDelete/:id', categoryDelete);

export default category;
