import Router from 'express';
import CardController from './CardController.js';
import AuthController from './AuthController.js';
import { check } from 'express-validator';
import authMiddleWare from './middleware/auth.middleware.js';

const router = new Router();

router.post('/cards', CardController.create);
router.get('/cards', CardController.getAll);
router.get('/cards/:id', CardController.getOne);
router.put('/cards', CardController.update);
router.delete('/cards/:id', CardController.delete);

router.post('/registration', [
  check('userName', 'Имя пользователя не может быть пустым').notEmpty(),
  check('password', 'Пароль должен быть от 4 до 10 символов').isLength({ min: 4, max: 10 })
], AuthController.registration);
router.post('/login', AuthController.login);

router.get('/auth', authMiddleWare, AuthController.auth);
router.get('/users', AuthController.getUsers);

export default router;