import Router from 'express';
import CardController from './CardController.js';
import AuthController from './AuthController.js';

const router = new Router();

router.post('/cards', CardController.create);
router.get('/cards', CardController.getAll);
router.get('/cards/:id', CardController.getOne);
router.put('/cards', CardController.update);
router.delete('/cards/:id', CardController.delete);

router.post('/registration', AuthController.registration);
router.post('/login', AuthController.login);
router.get('/users', AuthController.getUsers);

export default router;