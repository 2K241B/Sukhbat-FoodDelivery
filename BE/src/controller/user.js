import { userModel } from '../schema/user.js';
import bcrypt from 'bcrypt';

const saltRounds = process.env.SALTROUND;

export const createUser = async (req, res) => {
  const { name, email, password, phone, role } = req.body;

  try {
    bcrypt.genSalt(saltRounds, (err, salt) => {
      bcrypt.hash(password, salt, async (err, hash) => {
        const response = await userModel.create({
          name,
          email,
          password: hash,
          phone,
          role,
        });
        return res.status(200).json(response);
      });
    });
  } catch (error) {
    return res.status(500).json(error);
  }
};
