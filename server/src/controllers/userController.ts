import { Request, Response } from 'express';
import { getAllUsers, getUserById, updateUser, deleteUser } from '../services/userService';
import { handleError } from '../utils/errorHandler';

export const getAllUsersHandler = async (_req: Request, res: Response): Promise<void> => {
  try {
    const users = await getAllUsers();
    res.status(200).json(users);
  } catch (error) {
    const errorMessage = handleError(error);  
    res.status(500).json({ error: errorMessage });
  }
};

export const getUserByIdHandler = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;

  try {
    const user = await getUserById(id);
    res.status(200).json(user);
  } catch (error) {
    const errorMessage = handleError(error);  
    res.status(404).json({ error: errorMessage });
  }
};

export const updateUserHandler = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  const data = req.body;

  try {
    const message = await updateUser(id, data);
    res.status(200).json({ message });
  } catch (error) {
    const errorMessage = handleError(error);  
    res.status(400).json({ error: errorMessage });
  }
};

export const deleteUserHandler = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;

  try {
    const message = await deleteUser(id);
    res.status(200).json({ message });
  } catch (error) {
    const errorMessage = handleError(error);  
    res.status(404).json({ error: errorMessage });
  }
};
