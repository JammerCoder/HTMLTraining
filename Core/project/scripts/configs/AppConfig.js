angular.module('MainApp').requires.push('ngRoute');

angular.module('MainApp').config( function($routeProvider){
    $routeProvider
        .when('/home',{
            controller:'MainController', templateUrl:'/Core/project/partials/main.html'
        })
        .when('/products',{
            controller:'ProductsController', templateUrl:'/Core/project/partials/products.html'
        })
        .when('/productsEntry',{
            controller:'ProductsController', templateUrl:'/Core/project/partials/productsEntry.html'
        })
        .otherwise({redirectTo: '/home'});
});
