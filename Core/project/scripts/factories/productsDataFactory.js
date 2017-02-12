angular.module('MainApp').factory('ProductsDataFactory', ProductsDataFactory);

function ProductsDataFactory(){
    var factory = {};
    
    var productItems = [
        {productName: 'LG Television', productCategory: 'Home Entertainment'},
        {productName: 'Sharp Sound System', productCategory: 'Home Entertainment'},
        {productName: 'La Germania', productCategory: 'Kitchen Appliance'}
    ];
    
    factory.getAllProducts = function(){
        return productItems;
    };
    
    return factory;
    
}