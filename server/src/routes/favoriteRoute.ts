import express from 'express';
import {
  saveFavoriteHandler,
  findFavoriteHandler,
  deleteFavoriteHandler,
  findFavoritesByUserHandler,
} from '../controllers/favoriteController';

const router = express.Router();

router.post('/', saveFavoriteHandler);
router.get('/:id', findFavoriteHandler);
router.delete('/:id', deleteFavoriteHandler);
router.get('/', findFavoritesByUserHandler);

export default router;
