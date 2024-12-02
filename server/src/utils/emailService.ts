import sgMail from '@sendgrid/mail';
import dotenv from 'dotenv';
dotenv.config();

sgMail.setApiKey(process.env.SENDGRID_API_KEY || '');

console.log('test', process.env.SENDGRID_API_KEY)

export const sendVerificationEmail = async (to: string, token: string) => {
  const verificationLink = `http://localhost:5173/verify/${token}`;

  const message = {
    to, 
    from: process.env.SENDGRID_SENDER_EMAIL || '', 
    subject: 'Email Verification',
    text: `Click the link to verify your email: ${verificationLink}`,
    html: `<p>Click the link below to verify your email:</p>
           <a href="${verificationLink}">${verificationLink}</a>`,
  };

  try {
    await sgMail.send(message);
    console.log('Verification email sent');
  } catch (error) {
    console.error('Error sending email:', error);
    throw new Error('Failed to send verification email');
  }
};
