///// <reference path="../../scripts/typings/angularjs/angular.d.ts" />
///// <reference path="../../scripts/typings/angularjs/angular-route.d.ts" />

//module SuperFood.HomeDashboardApp {

//    export class Config {
//        constructor($routeProvider: ng.route.IRouteProvider ) {
//            $routeProvider
//                .when("/home/dashboard", { templateUrl: "../Typescript/HomeDashboard/Templates/HomeDashboard.html", controller: "productDashboardCtrl" })
//                .when("/home/cartreview", { templateUrl: "../Typescript/HomeDashboard/Templates/CartReview.html", controller: "cartCtrl" })
//                .when("/about", { templateUrl: "../Typescript/HomeDashboard/Templates/About.html" })

//                //default route
//                .otherwise({ redirectTo: '/home/dashboard' });
//        }
//    }

//    Config.$inject = ['$routeProvider'];

//    var app = angular.module("homeDashboardApp", ['ngRoute', 'ngSanitize', 'ui.bootstrap'])
//        .config(Config)
//        .factory('homeDashboardSvc', ['$http', '$q', SuperFood.HomeDashboardApp.HomeDashboardSvc.factory])
//        .controller('productDashboardCtrl', SuperFood.HomeDashboardApp.ProductDashboardCtrl)
//        .controller('cartCtrl', SuperFood.HomeDashboardApp.CartCtrl)
//        .directive('productDashboardContainer', SuperFood.HomeDashboardApp.ProductDashboardContainer.factory())
//        .directive('afterRenderDashboard', SuperFood.HomeDashboardApp.AfterRenderDashboard.factory());
//}