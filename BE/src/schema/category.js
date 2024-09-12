import { model, Schema } from 'mongoose';

const categorySchema = new Schema({
  name: String,
});

export const categoryModel = model('category', categorySchema);
