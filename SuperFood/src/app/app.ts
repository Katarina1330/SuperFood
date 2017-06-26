/// <reference path="../../scripts/typings/angularjs/angular.d.ts" />
/// <reference path="../../scripts/typings/angularjs/angular-route.d.ts" />

module SuperFood.App {

    export class Config {
        constructor($routeProvider: ng.route.IRouteProvider) {
            $routeProvider
                .when("/home/dashboard", { templateUrl: "../src/app/dashboard/dashboard.html", controller: "dashboardController" })

                //default route
                .otherwise({ redirectTo: '/home/dashboard' });
        }
    }

    Config.$inject = ['$routeProvider'];

    var app = angular.module("app", ['ngRoute', 'ngSanitize', 'ui.bootstrap'])
        .config(Config)
        .factory('productService', ['$http', '$q', SuperFood.Services.ProductService.factory])
        .controller('dashboardController', SuperFood.Dashboard.DashboardController);
}