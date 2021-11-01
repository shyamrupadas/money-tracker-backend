import Card from '../models/Card.js';

class CardService {
  async create(card) {
    const createCard = await Card.create(card);
    return createCard;
  }

  async getAll() {
    const cards = await Card.find();
    return cards;
  }

  async getOne(id) {
    if (!id) {
      throw new Error('не указан ID');
    }
    const card = await Card.findById(id);
    return card;
  }

  async update(post) {
      if (!post._id) {
        throw new Error('не указан ID');
      }
      const updatedCard = await Card.findByIdAndUpdate(post._id, post, { new: true });
      return updatedCard;
  }

  async delete(id) {
      if (!id) {
        throw new Error('не указан ID');
      }
      const card = await Card.findByIdAndDelete(id);
      return card;
   }
}

export default new CardService();