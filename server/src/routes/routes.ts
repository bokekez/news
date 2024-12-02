import express from 'express';
import login from './loginRoutes';
import users from './userRoutes'
import newsRoutes from './newsRoutes'
import favoriteRoutes from './favoriteRoute'

const router = express.Router();

router.use('/login', login);
router.use('/users', users);
router.use('/news', newsRoutes);
router.use('/favorites', favoriteRoutes);

export default router;
