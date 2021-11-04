import AccountService from '../services/AccountService.js';
import Account from '../models/Account.js';


class AccountController {
  async create(req, res) {
    try {
      const { name, sum } = req.body;
      const tmpAccount = new Account({ name, sum, user: req.user.id })

      const account = await AccountService.create(tmpAccount);
      res.json(account);
    } catch (e) {
      res.status(500).json(e.message);
    }
  }

  async getAll(req, res) {
    try {
      const accounts = await AccountService.getAll(req.user.id);
      return res.json(accounts);
    } catch (e) {
      res.status(500).json(e.message);
    }
  }

  async getOne(req, res) {
    try {
      const account = await AccountService.getOne(req.params.id);
      return res.json(account);
    } catch (e) {
      res.status(500).json(e.message);
    }
  }

  async update(req, res) {
    try {
      const updatedAccount = await AccountService.update(req.body);
      return res.json(updatedAccount);
    } catch (e) {
      res.status(500).json(e.message);
    }
  }

  async delete(req, res) {
    try {
      const account = await AccountService.delete(req.params.id);
      return res.json(account);
    } catch (e) {
      res.status(500).json(e.message);
    }
  }
}

export default new AccountController();