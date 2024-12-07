import User from '../database/models/user';
import { UserResponse } from '../types/userModel';
import { MESSAGES } from '../constants/Messages';

export const getAllUsers = async (): Promise<UserResponse[]> => {
  const users = await User.findAll({ attributes: { exclude: ['password'] } });
  return users;
};

export const getUserById = async (id: string): Promise<UserResponse> => {
  const user = await User.findByPk(id, {
    attributes: { exclude: ['password'] },
  });

  if (!user) {
    throw new Error(MESSAGES.USER.USER_NOT_FOUND);
  }

  return user.toJSON() as UserResponse;
};

export const updateUser = async (
  id: string,
  data: Partial<Omit<User, 'username' | 'password'>>
): Promise<string> => {
  const user = await User.findByPk(id);

  if (!user) {
    throw new Error(MESSAGES.USER.USER_NOT_FOUND);
  }

  const { firstName, lastName } = data;

  if (firstName) user.firstName = firstName;
  if (lastName) user.lastName = lastName;

  await user.save();

  return MESSAGES.OPERATIONS.UPDATE;
};

export const deleteUser = async (id: string): Promise<string> => {
  const user = await User.findByPk(id);

  if (!user) {
    throw new Error(MESSAGES.USER.USER_NOT_FOUND);
  }

  await user.destroy();
  return MESSAGES.OPERATIONS.DELETE;
};
