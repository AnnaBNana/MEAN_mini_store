var mongoose = require('mongoose');

var ProductSchema = new mongoose.Schema ({
  name: String,
  image_url: String,
  desc: String,
  qty: Number
});

mongoose.model('Product', ProductSchema);
