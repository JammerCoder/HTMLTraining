angular.module('MainApp').requires.push('ngRoute');

angular.module('MainApp').config('MainConfig', function($routeProvider){
    $routeProvider
        .when('/',{
            controller:'MainController', templateUrl:'/Core/project/partials/main.html'
        })
        .when('/products',{
            controller:'ProductsController', templateUrl:'/Core/project/partials/products.html'
        })
        .otherwise({redirectTo: '/'});
});
