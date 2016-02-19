var mongoose = require('mongoose');
var Product = mongoose.model('Product');
module.exports = (function() {
  return {
    index: function(req, res) {
      Product.find({}, function(err, results) {
        if(err) {
          console.log(err);
        } else {
          res.json(results);
        }
      })
    },
    create: function(req, res) {
      var productInstance = new Product ({name: req.body.name, image_url: req.body.url, desc: req.body.desc, qty: req.body.qty});
      productInstance.save(function(err, results) {
        if(err) {
          console.log(err);
        } else {
          res.json(results);
          console.log(results);
        }
      })
    }
  }
})();
