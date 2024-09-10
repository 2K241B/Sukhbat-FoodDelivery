import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  auth: {
    user: 'ksubi666@gmail.com',
    pass: 'unzdfmcqdjdyxeyo',
  },
});
const mailOptions = {
  from: 'ksubi666@gmail.com',
  to: 'ksubi666@gmail.com',
  subject: 'Food Delivery',
  html: '<button>Hello world?</button>',
};
export const sendMail = async (req, res) => {
  try {
    transporter.sendMail(mailOptions, function (error, info) {
      if (info) {
        return res.status(200).json(info.messageId);
      }
    });
  } catch (error) {
    return res.status(500).json(error);
  }
};
