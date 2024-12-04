import User from '../database/models/user';
import { sendVerificationEmail } from '../utils/emailService';
import { MESSAGES } from '../constants/Messages';
import { Op } from 'sequelize';
import bcrypt from 'bcrypt';

export const registerUser = async (
  username: string,
  password: string,
  firstName: string,
  lastName: string,
  email: string
): Promise<string> => {
  const user = await User.findOne({
    where: {
      [Op.or]: [
        { username }, 
        { email }
      ]
    }
  });

  if (user) {
    if(username === user.dataValues.username){
      throw new Error(MESSAGES.USER.USER_ALREADY_EXISTS);
    }
    if(email === user.dataValues.email){
      throw new Error(MESSAGES.USER.EMAIL_ALREADY_EXISTS);
    }
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const newUser = await User.create({
    username,
    password: hashedPassword,
    firstName,
    lastName,
    email,
    isVerified: false,
  });

  const token = `${newUser.id}-${Date.now()}`;

  try {
    await sendVerificationEmail(email, token);
  } catch {
    throw new Error(MESSAGES.EMAIL.EMAIL_SEND_ERROR);
  }

  return MESSAGES.EMAIL.VERIFICATION_SENT;
};

export const loginUser = async (username: string, password: string): Promise<string> => {
  const user = await User.findOne({ where: { username } });  

  if (!user) {
    throw new Error(MESSAGES.USER.INVALID_CREDENTIALS);
  }

  if (!(await verifyPassword(password, user.password))) {
    throw new Error('Invalid password');
  }

  if (!user.isVerified) {
    throw new Error(MESSAGES.USER.NOT_VERIFIED);
  }

  return MESSAGES.USER.LOGIN_SUCCESS;
};

const verifyPassword = async (inputPassword: string, hashedPassword: string): Promise<boolean> => {
  return await bcrypt.compare(inputPassword, hashedPassword);
};
