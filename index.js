import express from 'express';
import mongoose from 'mongoose';
import Card from './Card.js';

const PORT = 5000;
const DB_URL = 'mongodb+srv://user:user@cluster0.ivmut.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const app = express();

app.use(express.json())

app.post('/', async (req, res) => {
  try {
    const { name, sum, actualDate } = req.body;
    const card = await Card.create({ name, sum, actualDate });
    res.json(card);
  } catch (e) {
    res.status(500).json(e);
  }


});

async function startApp() {
  try {
    await mongoose.connect(DB_URL);
    app.listen(PORT, () => {
      console.log('Your server is started on port' + PORT)
    });
  } catch (e) {
    console.log(e);
  }
}

startApp();