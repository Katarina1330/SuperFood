/// <reference path="../../scripts/typings/angularjs/angular.d.ts" />
/// <reference path="../../scripts/typings/angularjs/angular-route.d.ts" />
var SuperFood;
(function (SuperFood) {
    var App;
    (function (App) {
        var Config = (function () {
            function Config($routeProvider) {
                $routeProvider
                    .when("/home/dashboard", { templateUrl: "../src/app/dashboard/dashboard.html", controller: "dashboardController" })
                    .when("/administration/product", { templateUrl: "../src/app/administration/product/product.html", controller: "productController" })
                    .otherwise({ redirectTo: '/home/dashboard' });
            }
            return Config;
        }());
        App.Config = Config;
        Config.$inject = ['$routeProvider'];
        var app = angular.module("app", ['ngRoute', 'ngSanitize', 'ui.bootstrap'])
            .config(Config)
            .factory('productService', ['$http', '$q', SuperFood.Services.ProductService.factory])
            .controller('dashboardController', SuperFood.Dashboard.DashboardController)
            .controller('productController', SuperFood.Administration.ProductController);
    })(App = SuperFood.App || (SuperFood.App = {}));
})(SuperFood || (SuperFood = {}));
