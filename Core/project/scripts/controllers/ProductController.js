angular.module('MainApp').controller('ProductController', ProductController);

function ProductController($scope) {
    var productItems = [
        {productName: 'LG Television', productCategory: 'Home Entertainment'},
        {productName: 'Sharp Sound System', productCategory: 'Home Entertainment'},
        {productName: 'La Germania', productCategory: 'Kitchen Appliance'}
    ];
    
    $scope.products = productItems;
    $scope.heading = "Product Listing";
    
    $scope.addNewItem = function(){
        $scope.products.push(
            {productName: $scope.newProduct.productName, productCategory: $scope.newProduct.productCategory}
        )
        
        $scope.newProduct.productName = "";  $scope.newProduct.productCategory="";
    }
}
