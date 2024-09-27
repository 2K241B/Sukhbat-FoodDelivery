export const createUser = async (req, res, next) => {
  const {
    userId,
    orderNumber,
    foods,
    totalPrice,
    process,
    district,
    Khoroo,
    Apartment,
    Description,
    PhoneNumber,
    MethodOfPay,
  } = req.body;

  try {
    const response = await userModel.create({
      userId,
      orderNumber,
      foods,
      totalPrice,
      process,
      district,
      Khoroo,
      Apartment,
      Description,
      PhoneNumber,
      MethodOfPay,
    });
    return res.status(200).json(response);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};
