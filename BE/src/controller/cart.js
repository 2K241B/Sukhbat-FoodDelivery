import { cartModel } from '../schema/cart.js';

export const createCart = async (req, res) => {
  const { count, productId, userId, _id } = req.body;

  try {
    const cart = await cartModel.findById(_id);
    if (!cart) {
      const response = await cartModel.create({
        products: { productId, count },
        userId,
      });
      return res.status(200).json(response);
    }
    cart.products.push({ productId });

    await cart.save();

    return res.send(cart);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};
