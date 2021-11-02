import Router from 'express';
import AccountController from '../controllers/AccountController.js';
import authMiddleWare from '../middleware/auth.middleware.js';

const accountRoutes = new Router();

accountRoutes.post('', authMiddleWare, AccountController.create);
accountRoutes.get('', authMiddleWare, AccountController.getAll);
accountRoutes.get('/:id', AccountController.getOne);
accountRoutes.put('', AccountController.update);
accountRoutes.delete('/:id', AccountController.delete);

export default accountRoutes;