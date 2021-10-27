import User from './models/User.js';
import Role from './models/Role.js';
import bcrypt from 'bcryptjs';
import {validationResult} from 'express-validator';


class AuthController {
  async registration(req, res) {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).json({message: 'Ошибка при регистрации', errors})
      }

      const { userName, password } = req.body;
      const candidate = await User.findOne({userName});

      if (candidate) {
        return res.status(400).json({message: 'Пользователь с таким именем уже существует'});
      }

      const hashPassword = bcrypt.hashSync(password, 7 );
      const userRole = await Role.findOne({value: 'user'})
      const user = new User({userName, password: hashPassword, roles: [userRole.value]});
      await user.save();
      return res.json({message: 'Пользователь успешно зарегистрирован'})
    } catch (e) {
      console.log(e);
      res.status(400).json({message: 'Registration error'});
    }
  }

  async login(req, res) {
    try {

    } catch (e) {
      console.log(e);
      res.status(400).json({message: 'Login error'});
    }
  }

  async getUsers(req, res) {
    try {
      res.json('server working');
    } catch (e) {

    }
  }
}

export default new AuthController();