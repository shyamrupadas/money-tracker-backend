import Account from '../models/Account.js';

class AccountService {
  async create(account) {
    return await Account.create(account);
  }

  async getAll(userId) {
    return Account.find({ user: userId });
  }

  async getOne(id) {
    if (!id) {
      throw new Error('не указан ID');
    }
    return Account.findById(id);
  }

  async update(post) {
      if (!post._id) {
        throw new Error('не указан ID');
      }
      return Account.findByIdAndUpdate(post._id, post, { new: true });
  }

  async delete(id) {
      if (!id) {
        throw new Error('не указан ID');
      }
      return Account.findByIdAndDelete(id);
   }
}

export default new AccountService();