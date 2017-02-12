angular.module('MainApp').controller('ProductsController', ProductsController);

function ProductsController($scope, ProductsDataFactory) {
    
    
    $scope.products = ProductsDataFactory.getAllProducts();
    $scope.heading = "Product Listing";
    
    $scope.addNewItem = function(){
        $scope.products.push(
            {productName: $scope.newProduct.productName, productCategory: $scope.newProduct.productCategory}
        )
        
        $scope.newProduct.productName = "";  $scope.newProduct.productCategory="";
    }
}
