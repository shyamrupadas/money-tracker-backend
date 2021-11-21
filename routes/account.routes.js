import Router from 'express';
import AccountController from '../controllers/AccountController.js';
import authMiddleWare from '../middleware/auth.middleware.js';

const accountRoutes = new Router();

accountRoutes.post('', authMiddleWare, AccountController.create);
accountRoutes.get('', authMiddleWare, AccountController.getAll);
accountRoutes.get('/:id', authMiddleWare, AccountController.getOne);
accountRoutes.put('', authMiddleWare, AccountController.update);
accountRoutes.delete('/:id', authMiddleWare, AccountController.delete);

export default accountRoutes;