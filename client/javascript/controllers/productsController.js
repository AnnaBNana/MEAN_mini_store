store_app.controller('productsController', function($scope, productFactory) {
  $scope.products = [];
  $scope.displayLimit = 15;

  productFactory.index(function(data) {
    $scope.products = data;
  })
  productFactory.makeQty(function(data) {
    $scope.qty = data;
  })
  $scope.changeLimit = function() {
    $scope.displayLimit += 15;
  }
  $scope.addProduct = function() {
    productFactory.create($scope.newProduct, function() {
      productFactory.index(function(data) {
        $scope.products = data;
        console.log(data);
      });
    });
    $scope.newProduct = {};
  }
  $scope.applySearch = function() {
    $scope.search = $scope.searchInput;
  }

})
