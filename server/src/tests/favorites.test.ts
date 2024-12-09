import request from 'supertest';
import app from '../index';
import {
  saveFavorite,
  findFavoriteById,
  deleteFavorite,
  findFavoritesByUserId,
} from '../services/favoriteService';

jest.mock('../services/favoriteService');

describe('Favorite Controller Tests', () => {
  describe('POST /favorites', () => {
    it('should save a new favorite successfully', async () => {
      const res = await request(app)
        .post('/favorites')
        .send({ userId: 1, article: { title: 'Test Article' } });
      expect(res.status).toBe(201);
    });

    it('should save a new favorite successfully', async () => {
      const mockFavorite = { id: 1, userId: 1, article: { title: 'Test Article' } };
      (saveFavorite as jest.Mock).mockResolvedValue(mockFavorite);

      const res = await request(app)
        .post('/favorites')
        .send({ userId: 1, article: { title: 'Test Article' } });

      expect(res.status).toBe(201);
      expect(res.body.favorite).toEqual(mockFavorite);
    });

    it('should handle error when saving favorite fails', async () => {
      const errorMessage = 'Failed to save favorite';
      (saveFavorite as jest.Mock).mockRejectedValue(new Error(errorMessage));

      const res = await request(app)
        .post('/favorites')
        .send({ userId: 1, article: { title: 'Test Article' } });

      expect(res.status).toBe(500);
      expect(res.body.error).toBe(errorMessage);
    });
  });

  describe('GET /favorites/:id', () => {
    it('should retrieve a favorite by ID successfully', async () => {
      const mockFavorite = { id: 1, userId: 1, article: { title: 'Test Article' } };
      (findFavoriteById as jest.Mock).mockResolvedValue(mockFavorite);

      const res = await request(app).get('/favorites/1');

      expect(res.status).toBe(200);
      expect(res.body.favorite).toEqual(mockFavorite);
    });
  });

  describe('DELETE /favorites/:id', () => {
    it('should delete a favorite successfully', async () => {
      const mockMessage = 'Favorite deleted successfully';
      (deleteFavorite as jest.Mock).mockResolvedValue(mockMessage);

      const res = await request(app).delete('/favorites/1');

      expect(res.status).toBe(200);
      expect(res.body.message).toBe(mockMessage);
    });

    it('should return an error when deleting fails', async () => {
      const errorMessage = 'Failed to delete favorite';
      (deleteFavorite as jest.Mock).mockRejectedValue(new Error(errorMessage));

      const res = await request(app).delete('/favorites/1');

      expect(res.status).toBe(500);
      expect(res.body.error).toBe(errorMessage);
    });
  });

  describe('GET /favorites', () => {
    it('should retrieve all favorites by user ID', async () => {
      const mockFavorites = [
        { id: 1, userId: 1, article: { title: 'Test Article 1' } },
        { id: 2, userId: 1, article: { title: 'Test Article 2' } },
      ];
      (findFavoritesByUserId as jest.Mock).mockResolvedValue(mockFavorites);

      const res = await request(app).get('/favorites').query({ userId: 1 });

      expect(res.status).toBe(200);
      expect(res.body.favorites).toEqual(mockFavorites);
    });

    it('should handle error when retrieving favorites by user ID fails', async () => {
      const errorMessage = 'Failed to retrieve favorites';
      (findFavoritesByUserId as jest.Mock).mockRejectedValue(new Error(errorMessage));

      const res = await request(app).get('/favorites').query({ userId: 1 });

      expect(res.status).toBe(500);
      expect(res.body.error).toBe(errorMessage);
    });
  });
});
