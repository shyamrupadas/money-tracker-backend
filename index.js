import express from 'express';
import mongoose from 'mongoose';
import cardRoutes from './routes/card.routes.js';
import accountRoutes from './routes/account.routes.js';
import authRoutes from './routes/auth.routes.js';
import corsMiddleware from './middleware/cors.middleware.js'

const PORT = process.env.PORT || 5000;
const DB_URL = 'mongodb+srv://user:user@cluster0.ivmut.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const app = express();

app.use(corsMiddleware);
app.use(express.json());
app.use('/api', authRoutes);
app.use('/api/account', accountRoutes);
app.use('/api/cards', cardRoutes);

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