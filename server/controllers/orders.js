var mongoose = require('mongoose');
var Order = mongoose.model('Order');
var Product = mongoose.model('Product');
module.exports = (function() {
  return {
    index: function(req, res) {
      Order.find({}, function(err, results) {
        if(err) {
          console.log(err);
        } else {
          res.json(results);
        }
      })
    },
    create: function(req, res) {
      console.log(req.body);
      var orderInstance = new Order({customer: req.body.customer, product: req.body.product, qty: req.body.qty, date: req.body.date});
      orderInstance.save(function(err, results) {
        if(err) {
          console.log(err);
        } else {
          var decVal = results.qty;
          var name = results.product;
          Product.update({name: name}, {$inc : {qty: -decVal}}, function(err, results){
            console.log(results);
          })
          res.json(results);
        }
      })
    }
  }
})();
