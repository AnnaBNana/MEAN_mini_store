store_app.factory('orderFactory', function($http) {
  var factory = {};
  var orders = [];
  var products = ['hot air baloon', 'baby tiger', 'bean burrito', 'dinosaur DNA', 'six foot bong'];

  factory.index = function(callback) {
    $http.get('/orders').success(function(output) {
      orders = output;
      callback(orders);
    })
  }
  factory.getProducts = function(callback) {
    callback(products);
  }
  factory.create = function(newOrder, callback) {
    order = {customer: newOrder.customer.name, product: newOrder.product.name, qty: newOrder.qty, date: new Date()};
    $http.post('/orders', order).success(function() {
      orders.push(order);
      callback(orders);
    });
  }
  return factory;
})
