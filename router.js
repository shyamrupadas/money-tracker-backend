import Router from 'express';
import CardController from './CardController.js';
import AuthController from './AuthController.js';
import { check } from 'express-validator';
import authMiddleWare from './middleware/auth.middleware.js';
import User from './models/User.js';
import jwt from 'jsonwebtoken';
import { secret } from './config.js';

const router = new Router();

const generateAccessToken = (id, roles) => {
  const payload = {
    id,
    roles
  };
  return jwt.sign(payload, secret, { expiresIn: '24h' });
};

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

router.get('/auth', authMiddleWare,
  async (req, res) => {
    try {
      const user = await User.findOne({_id: res.user.id});
      const token = generateAccessToken(user._id, user.roles)
      return res.json({
        token,
        user: {
          id: user._id,
          userName: user.userName
        }
      });
    } catch (e) {
      console.log(e);
      res.status(400).json({ message: 'Login error' });
    }
  }
)


router.get('/users', AuthController.getUsers);

export default router;