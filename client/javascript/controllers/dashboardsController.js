store_app.controller('dashboardsController', function($scope, customerFactory, productFactory, orderFactory) {
  $scope.customers = [];
  $scope.products = [];
  $scope.orders = [];
  $scope.productLimit = 5;
  $scope.search = "";
  $scope.searchInput = "";

  customerFactory.index(function(data) {
    $scope.customers = data;$scope.customers.reverse();
  })
  productFactory.index(function(data) {
    $scope.products = data;
  })
  orderFactory.index(function(data) {
    $scope.orders = data;
    $scope.orders.reverse();
  })
  $scope.increaseLimit = function() {
    $scope.productLimit += 5;
  }
  $scope.applySearch = function() {
    $scope.search = $scope.searchInput;
  }

})
