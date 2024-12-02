import { Router } from 'express';
import { getAllUsersHandler, getUserByIdHandler, updateUserHandler, deleteUserHandler } from '../controllers/userController';

const router = Router();

router.get('/', getAllUsersHandler);
router.get('/:id', getUserByIdHandler);
router.put('/:id', updateUserHandler);
router.delete('/:id', deleteUserHandler);

export default router;