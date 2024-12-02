import { Request, Response } from 'express';
import { registerUser, loginUser } from '../services/authService';
import User from '../database/models/user';
import { handleError } from '../utils/errorHandler';
import { MESSAGES } from '../constants/Messages';

export const register = async (req: Request, res: Response): Promise<void> => {
  const { username, password, firstName, lastName, email } = req.body;

  try {
    const message = await registerUser(username, password, firstName, lastName, email);
    res.status(201).json({ message });
    
  } catch (error) {
    const errorMessage = handleError(error);  
    res.status(400).json({ error: errorMessage });
  }
};

export const login = async (req: Request, res: Response): Promise<void> => {
  const { username, password } = req.body;

  if (!username || !password) {
    res.status(400).json({ error: MESSAGES.USER.INVALID_CREDENTIALS });
    return;
  }

  try {
    const message = await loginUser(username, password);
    res.status(200).json({ message });
  } catch (error) {
    const errorMessage = handleError(error);  
    res.status(401).json({ error: errorMessage });
  }
};

export const verifyEmail = async (req: Request, res: Response): Promise<void> => {
  const token = req.query.token;

  if (!token || typeof token !== 'string') {
    res.status(400).json({ error: MESSAGES.TOKEN.REQUIRED });
    return;
  }

  try {
    const [userId] = token.split('-');
    const user = await User.findByPk(userId);

    if (!user) {
      res.status(404).json({ error: MESSAGES.USER.USER_NOT_FOUND });
      return;
    }

    if (user.isVerified) {
      res.status(400).json({ error: MESSAGES.USER.USER_ALREADY_EXISTS });
      return;
    }

    await user.update({ isVerified: true });

    res.status(200).json({ message: MESSAGES.EMAIL.VERIFICATION_SENT });
  } catch (error) {
    const errorMessage = handleError(error);  
    res.status(500).json({ error: errorMessage });
  }
};
