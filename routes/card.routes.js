import Router from 'express';
import CardController from '../controllers/CardController.js';
import authMiddleWare from '../middleware/auth.middleware.js';

const cardRoutes = new Router();

cardRoutes.post('', authMiddleWare, CardController.create);
cardRoutes.get('', CardController.getAll);
cardRoutes.get('/:id', CardController.getOne);
cardRoutes.put('', CardController.update);
cardRoutes.delete('/:id', CardController.delete);

export default cardRoutes;