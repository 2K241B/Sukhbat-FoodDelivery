import { userModel } from '../schema/user.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const Login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const response = await userModel.findOne({ email });

    if (!response) return res.status(404).send('User not found');

    const result = bcrypt.compare(password, response.password);
    if (result) {
      const token = jwt.sign({ ...response }, process.env.JWT_PRIVATE_KEY);
      console.log('set cookie');
      return res.status(200).cookie('token', token).end();
    } else {
      return res.status(404).send('Incorrect email or password');
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};
export const CookieCheck = (req, res) => {
  const token = req.cookies;
  try {
    if (token) {
      const verify = jwt.verify(token, process.env.JWT_PRIVATE_KEY);
      res.json({
        login: true,
        data: verify,
      });
    } else {
      console.log(token);
      res.json({
        login: false,
        data: 'error',
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};