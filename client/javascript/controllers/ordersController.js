store_app.controller('ordersController', function($scope, orderFactory, customerFactory, productFactory) {
  $scope.orders = [];
  $scope.customers = [];
  $scope.products = [];

  orderFactory.index(function(data) {
    $scope.orders = data;
  })
  customerFactory.index(function(data) {
    $scope.customers = data;
  })
  productFactory.index(function(data) {
    $scope.products = data;
  })
  $scope.addOrder = function() {
    // console.log($scope.newOrder);
    orderFactory.create($scope.newOrder, function() {
      orderFactory.index(function(data) {
        $scope.orders = data;
      });
      $scope.newOrder = {};
    });
  }
  $scope.addQty = function() {
    $scope.qty = [];
    console.log($scope.newOrder.product.qty);
    for (var i = 1; i <= $scope.newOrder.product.qty; i++) {
      $scope.qty.push(i);
    }
    $scope.selected = true;
  }
})
