/// <reference path="../../scripts/typings/angularjs/angular.d.ts" />
/// <reference path="../../scripts/typings/angularjs/angular-route.d.ts" />

module SuperFood.App {

    export class Config {
        constructor($routeProvider: ng.route.IRouteProvider) {
            $routeProvider
                .when("/home/dashboard", { templateUrl: "../src/app/dashboard/dashboard.html", controller: "dashboardController" })
                .when("/administration/product", { templateUrl: "../src/app/administration/product/product.html", controller: "productController" })
                .when("/administration/producttypes", { templateUrl: "../src/app/administration/productType/productType.html", controller: "productTypeController" })
                .when("/administration/order", { templateUrl: "../src/app/administration/order/order.html", controller: "orderController" })
                .when("/menu/product", { templateUrl: "../src/app/menu/menu.html", controller: "menuController" })
                .when("/cart", { templateUrl: "../src/app/cart/cart.html", controller: "cartController" })

                //default route
                .otherwise({ redirectTo: '/home/dashboard' });
        }
    }

    Config.$inject = ['$routeProvider'];
    
    var app = angular.module('app', ['ngRoute', 'ngSanitize', 'ui.bootstrap'])
        .config(Config)
        .factory('productService', ['$http', '$q', SuperFood.Services.ProductService.factory])
        .factory('productTypeService', ['$http', '$q', SuperFood.Services.ProductTypeService.factory])
        .factory('orderService', ['$http', '$q', SuperFood.Services.OrderService.factory])
        .controller('dashboardController', SuperFood.Dashboard.DashboardController)
        .controller('productController', SuperFood.Administration.ProductController)
        .controller('productTypeController', SuperFood.Administration.ProductTypeController)
        .controller('orderController', SuperFood.Administration.OrderController)
        .controller('menuController', SuperFood.Menu.MenuController)
        .controller('cartController', SuperFood.Cart.CartController);
}

