import nodemailer from 'nodemailer';
import config from '../config';


export const sendEmail = async (to: string, subject: string, html: string) => {
  
  try {
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: config.NODE_ENV === 'production',
    auth: {
      // TODO: replace `user` and `pass` values from <https://forwardemail.net>
      user: config.email_user,
      pass: config.email_pass,
    },
  });

  await transporter.sendMail({
    from: config.email_user, // sender address
    to, // list of receivers
    subject, // Subject line
    text: '', // plain text body
    html, // html body
  });

} catch (error) {
  console.error('❌ Error sending email:', error);
  throw new Error('Email sending failed'); // Ensures the server doesn’t crash
}


};
