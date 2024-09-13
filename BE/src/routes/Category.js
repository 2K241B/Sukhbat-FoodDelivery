import { Router } from 'express';
import { createCategory, getCategories } from '../controller/category.js';

const category = Router();

category.post('/create', createCategory).get('/getCategories', getCategories);

export default category;
