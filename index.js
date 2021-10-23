import express from 'express';
import mongoose from 'mongoose';

const PORT = 5000;
const DB_URL = 'mongodb+srv://user:user@cluster0.ivmut.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const app = express();

app.use(express.json())

app.post('/', (req, res) => {
  res.status(200).json('Server online!');
});

async function startApp() {
  try {
    await mongoose.connect(DB_URL);
    app.listen(PORT, () => { console.log('you server is started on port' + PORT) });
  } catch (e) {
    console.log(e);
  }
}

startApp();