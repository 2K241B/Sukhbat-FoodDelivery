import { otpModel } from '../schema/otp.js';
import { userModel } from '../schema/user.js';
import { sendMail } from './mail.js';

export const createOTP = async (req, res) => {
  const { email } = req.body;
  const randomNumber = Math.floor(1000 + Math.random() * 9000);

  try {
    const checkEmail = await userModel.findOne({ email });

    if (!checkEmail) return res.status(404).send('User not found');

    const response = await otpModel.create({
      email: email,
      otp: randomNumber,
    });
    await sendMail({
      to: 'ksubi666@gmail.com',
      otp: randomNumber,
    });
    return res.status(200).json(checkEmail);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

export const CheckOTP = async (req, res) => {
  const { email, otp } = req.body;

  try {
    const response = await otpModel.findOneAndDelete({ email, otp });

    if (!response) return res.status(404).send('OTP not found');

    return res.status(200).json(response);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};
