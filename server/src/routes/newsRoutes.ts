import { Router } from 'express';
import { getLatestNewsHandler } from '../controllers/newsController';

const router = Router();

router.get('/latest', getLatestNewsHandler);

export default router;
