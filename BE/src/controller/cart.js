import { cartModel } from '../schema/cart.js';

export const createCart = async (req, res) => {
  const { quantity, productId, userId, _id } = req.body;

  try {
    const cart = await cartModel.findById(_id);
    if (!cart) {
      const response = await cartModel.create({
        products: { productId, quantity },
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

export const getCart = async (req, res) => {
  const { id } = req.params;

  try {
    const response = await cartModel
      .findById(id)
      .populate({
        path: 'products.productId',
        model: 'food',
      })
      .populate('userId');
    return res.status(200).json(response);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

export const getCarts = async (req, res) => {
  try {
    const response = await cartModel
      .find()
      .populate({
        path: 'products.productId',
        model: 'food',
      })
      .populate('userId');
    return res.status(200).json(response);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};
export const deleteCarts = async (req, res) => {
  const { id } = req.params; // This could represent the cart ID
  const { productId } = req.body;

  try {
    const updatedCart = await cartModel.findOneAndUpdate(
      { _id: id, 'products.productId': productId }, // Find the cart by its ID and the product ID
      { $pull: { products: { productId } } }, // Remove the product from the cart
      { new: true } // Return the updated cart
    );

    if (!updatedCart) {
      return res
        .status(404)
        .json({ message: 'Cart not found or product not in cart.' });
    }

    return res.status(200).json(updatedCart);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error', error });
  }
};
