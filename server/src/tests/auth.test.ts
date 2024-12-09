import request from 'supertest';
import app from '../index'; // Import the app from index.ts
import { registerUser, loginUser } from '../services/authService';
import { MESSAGES } from '../constants/Messages';
import User from '../database/models/user';

jest.mock('../services/authService');
jest.mock('../database/models/user');
jest.mock('../utils/emailService');

describe('Auth Controller', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('POST /login/register', () => {
    it('should register a new user successfully', async () => {
      const mockMessage = 'Verification email sent.';
      (registerUser as jest.Mock).mockResolvedValue(mockMessage);

      const res = await request(app).post('/login/register').send({
        username: 'testuser',
        password: 'password123',
        firstName: 'John',
        lastName: 'Doe',
        email: 'testuser@example.com',
      });

      expect(res.status).toBe(201);
      expect(res.body.message).toBe(mockMessage);
    });

    it('should return error when username already exists', async () => {
      (registerUser as jest.Mock).mockRejectedValue(new Error(MESSAGES.USER.USER_ALREADY_EXISTS));

      const res = await request(app).post('/login/register').send({
        username: 'existinguser',
        password: 'password123',
        firstName: 'John',
        lastName: 'Doe',
        email: 'testuser@example.com',
      });

      expect(res.status).toBe(400);
      expect(res.body.error).toBe(MESSAGES.USER.USER_ALREADY_EXISTS);
    });
  });

  describe('PUT /login', () => {
    it('should login successfully', async () => {
      const mockUserResponse = {
        id: '1',
        username: 'testuser',
        firstName: 'John',
        lastName: 'Doe',
      };
      (loginUser as jest.Mock).mockResolvedValue(mockUserResponse);

      const res = await request(app).put('/login').send({
        username: 'testuser',
        password: 'password123',
      });

      expect(res.status).toBe(200);
      expect(res.body.data.username).toBe('testuser');
    });

    it('should return error when invalid credentials are provided', async () => {
      (loginUser as jest.Mock).mockRejectedValue(new Error(MESSAGES.USER.INVALID_CREDENTIALS));

      const res = await request(app).put('/login').send({
        username: 'wronguser',
        password: 'wrongpassword',
      });

      expect(res.status).toBe(401);
      expect(res.body.error).toBe(MESSAGES.USER.INVALID_CREDENTIALS);
    });
  });

  describe('POST /login/verify', () => {
    it('should verify email successfully', async () => {
      const mockUser = {
        id: '1',
        isVerified: false,
        update: jest.fn().mockResolvedValue({
          id: '1',
          isVerified: true,
        }),
      };

      (User.findByPk as jest.Mock).mockResolvedValue(mockUser);

      const res = await request(app).post('/login/verify').send({ token: '1-13456790' });

      expect(res.status).toBe(200);
    });

    it('should return error if token is invalid or missing', async () => {
      const res = await request(app).post('/login/verify').send({ token: '' });

      expect(res.status).toBe(400);
      expect(res.body.error).toBe(MESSAGES.TOKEN.REQUIRED);
    });

    it('should return error if user not found', async () => {
      (User.findByPk as jest.Mock).mockResolvedValue(null);

      const res = await request(app).post('/login/verify').send({ token: '999-1234567890' });

      expect(res.status).toBe(404);
      expect(res.body.error).toBe(MESSAGES.USER.USER_NOT_FOUND);
    });
  });
});
