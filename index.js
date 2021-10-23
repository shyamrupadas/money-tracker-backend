import express from 'express';

const PORT = 5000;

const app = express();

app.use(express.json())

app.post('/', (req, res) => {
  res.status(200).json('Server online!');
});

app.listen(PORT, () => {
  console.log('you server is started on port' + PORT)
});