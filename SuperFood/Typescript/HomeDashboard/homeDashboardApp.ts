/// <reference path="../../scripts/typings/angularjs/angular.d.ts" />
/// <reference path="../../scripts/typings/angularjs/angular-route.d.ts" />

module SuperFood.HomeDashboardApp {

    export class Config {
        constructor($routeProvider: ng.route.IRouteProvider ) {
            $routeProvider
                .when("/home/dashboard", { templateUrl: "../Typescript/HomeDashboard/Templates/HomeDashboard.html", controller: "homeDashboardCtrl" })

                //default route
                .otherwise({ redirectTo: '/home/dashboard' });
        }
    }

    Config.$inject = ['$routeProvider'];

    var app = angular.module("homeDashboardApp", ['ngRoute', 'ngSanitize', 'ui.bootstrap'])
        .config(Config)
        .factory('homeDashboardSvc', ['$http', '$q', SuperFood.HomeDashboardApp.HomeDashboardSvc.factory])
        .controller('homeDashboardCtrl', SuperFood.HomeDashboardApp.HomeDashboardCtrl)
        .directive('productDashboardContainer', SuperFood.HomeDashboardApp.ProductDashboardContainer.factory())
        .directive('afterRenderDashboard', SuperFood.HomeDashboardApp.AfterRenderDashboard.factory());
}