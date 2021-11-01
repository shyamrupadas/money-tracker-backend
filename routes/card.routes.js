import Router from 'express';
import CardController from '../CardController.js';

const cardRoutes = new Router();

cardRoutes.post('', CardController.create);
cardRoutes.get('', CardController.getAll);
cardRoutes.get('/:id', CardController.getOne);
cardRoutes.put('', CardController.update);
cardRoutes.delete('/:id', CardController.delete);

export default cardRoutes;