import { Router } from 'express';
import { register, login, verifyEmail } from '../controllers/authController';

const router = Router();

router.post('/register', register);
router.put('/', login);
router.post('/verify', verifyEmail);

export default router;
