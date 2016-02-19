var mongoose = require('mongoose');

var OrderSchema = new mongoose.Schema({
  customer: String,
  product: String,
  qty: Number,
  date: Date
});

mongoose.model('Order', OrderSchema);
