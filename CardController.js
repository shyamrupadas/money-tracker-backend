import Card from './Card.js';

class CardController {
  async create(req, res) {
    try {
      const { name, sum, actualDate } = req.body;
      const card = await Card.create({ name, sum, actualDate });
      res.json(card);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async getAll(req, res) {
    try {
      const cards = await Card.find();
      return res.json(cards);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async getOne(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        res.status(400).json({message: 'Id не указан'})
      }
      const card = await Card.findById(id);
      return res.json(card);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async update(req, res) {
    try {

    } catch (e) {
      res.status(500).json(e);
    }
  }

  async delete(req, res) {
    try {

    } catch (e) {
      res.status(500).json(e);
    }
  }
}

export default new CardController();