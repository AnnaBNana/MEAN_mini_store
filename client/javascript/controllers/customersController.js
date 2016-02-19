store_app.controller('customersController', function($scope, customerFactory) {
  $scope.customers = [];

  customerFactory.index(function(data) {
    $scope.customers = data;
  })

  $scope.addCustomer = function() {
    // console.log($scope.newCustomer);
    for (x in $scope.customers) {
      if($scope.newCustomer == undefined) {
        var blank = true
      }
      else if ($scope.customers[x].name == $scope.newCustomer.name) {
        var dupe = true;
      }
    }
    if (!dupe && !blank) {
      customerFactory.create($scope.newCustomer, function() {
        customerFactory.index(function(data) {
          $scope.customers = data;
        });
      });
    }
    else if (dupe) {
      $scope.dupe = true;
      $scope.blank = false;
    }
    else if (blank) {
      $scope.blank = true;
      $scope.dupe = false;
    }
    $scope.newCustomer = {};
  };

  $scope.removeCustomer = function(customer) {
    customerFactory.delete(customer, function() {
      console.log($scope.customers);
    });
  }
})
