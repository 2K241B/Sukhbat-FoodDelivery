import { model, Schema } from 'mongoose';

const foodSchema = new Schema({
  name: String,
  image: String,
  ingeredient: String,
  price: '',
  discount: '',
  categoryId: '',
});

export const foodModel = model('food', foodSchema);
