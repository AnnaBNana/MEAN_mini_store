store_app.factory('productFactory', function($http) {
  var factory = {};
  var products = [];

  factory.index = function(callback) {
    $http.get('/products').success(function(output) {
      products = output;
      callback(products);
    });
  }
  factory.makeQty = function(callback) {
    var qty = [];
    for (var i = 0; i <= 20; i++) {
      qty.push(i);
    }
    callback(qty);
  }
  factory.create = function(info, callback) {
    $http.post('/products', info).success(function() {
      products.push(info);
      callback(products);
    });
  }
  return factory;
})
