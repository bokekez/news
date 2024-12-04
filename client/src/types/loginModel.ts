export interface LoginResponse {
  accessToken: string;
  id: string;
  username: string;
  firstName: string;
  lastName: string;
}

export interface RegisterResponse {
  message: string;
}

export interface RegisterPayload {
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  email: string;
}