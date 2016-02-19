store_app.factory('customerFactory', function($http) {
  var factory = {};
  var customers =[];

  factory.index = function(callback) {
    $http.get('/customers').success(function(output) {
      customers = output;
      callback(customers);
    })
  }

  factory.create = function(info, callback) {
    info['created_at'] = new Date();
    $http.post('/customers', info).success(function() {
      customers.push(info);
      callback(customers);
    });
  }
  factory.delete = function(customer) {
    $http.delete('/customers/' + customer._id).success(function(output) {
      customers.splice(customers.indexOf(customer), 1);
    });
  }
  return factory;
})
