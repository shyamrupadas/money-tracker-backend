import Router from 'express';
import Card from './Card.js';

const router = new Router();

router.post('/cards', async (req, res) => {
  try {
    const { name, sum, actualDate } = req.body;
    const card = await Card.create({ name, sum, actualDate });
    res.json(card);
  } catch (e) {
    res.status(500).json(e);
  }


});
router.get('/cards');
router.get('/cards/:id');
router.put('/cards');
router.delete('/cards/:id');

export default router;