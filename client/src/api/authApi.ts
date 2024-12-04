import { LoginResponse, RegisterPayload, RegisterResponse } from "../types/loginModel";
import { MESSAGES } from "../constants/Messages";
const BASE_URL = 'http://localhost:8000';

export const loginUser = async (username: string, password: string): Promise<LoginResponse> => {
  try {
    const response = await fetch(`${BASE_URL}/login`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error);
    }

    const {data} = await response.json();
    return data
  } catch (error: unknown) {
    throw new Error(error instanceof Error ? error.message : MESSAGES.ERROR.UNKNOWN);
  }
};

export const registerUser = async (payload: RegisterPayload): Promise<RegisterResponse> => {
  console.log(payload)
  try {
    const response = await fetch(`${BASE_URL}/login/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error);
    }

    return await response.json();
  } catch (error: unknown) {
    throw new Error(error instanceof Error ? error.message : MESSAGES.ERROR.UNKNOWN);
  }
};
