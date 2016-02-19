var mongoose = require('mongoose');
var Customer = mongoose.model('Customer');
module.exports = (function() {
  return {
    index: function(req, res) {
      Customer.find({}, function(err, results) {
        if(err) {
          console.log(err);
        } else {
          res.json(results);
        }
      })
    },
    create: function(req, res) {
      var customerInstance = new Customer({name: req.body.name, created_at: req.body.created_at});
      customerInstance.save(function(err) {
        if(err) {
          console.log(err);
        } else {
          res.redirect('/customers');
        }
      })
    },
    destroy: function(req, res) {
      Customer.remove({_id: req.params.id}, function(err, name) {
        if(err) {
          console.log(err);
        } else {
          res.json(name);
        }
      })
    }
  }
})();
