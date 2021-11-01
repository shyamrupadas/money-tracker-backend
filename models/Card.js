import mongoose from 'mongoose';

const Card = new mongoose.Schema({
  name: {type: String, required: true},
  sum: {type: Number, required: true},
  actualDate: {type: Number, required: true},
  user: {type: mongoose.ObjectId, fer: 'User'}
});

export default mongoose.model('Card', Card);