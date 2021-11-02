import mongoose from 'mongoose';

const Account = new mongoose.Schema({
  name: {type: String, required: true},
  sum: {type: Number, required: true},
  actualDate: {type: Number, required: true},
  user: {type: mongoose.ObjectId, ref: 'User'}
});

export default mongoose.model('Account', Account);