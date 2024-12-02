import { Router } from 'express';
import { getLatestNewsHandler, searchNewsHandler } from '../controllers/newsController';

const router = Router();

router.get('/latest', getLatestNewsHandler);
router.get('/search', searchNewsHandler);

export default router;
