﻿/// <reference path="../../scripts/typings/angularjs/angular.d.ts" />
/// <reference path="../../scripts/typings/angularjs/angular-route.d.ts" />

/**
 * 
 * Application for hybrid admin view 
 */
module SuperFood.AdministrationApp {
    /**
     * admin profile controller makes comparison data
     * it available for the charting view
     */
    export class Config {

        //constructor($routeProvider: ng.route.IRouteProvider) {
        //    $routeProvider.when("/administration/producttypes", { templateUrl: "../Typescript/Administration/Templates/ProductTypeDashboard.html", controller: "productTypeCtrl" })

        //        //default route
        //        .otherwise({ redirectTo: '/admin/dashboard' });
        //}
    }
    //dependency injection -- from the constructor, typed IRouteProvider
    Config.$inject = [];//['$routeProvider'];

    //set up the controllers, data service, and directives for the app
    var app = angular.module("administrationApp", ['ngRoute', 'ngSanitize'])
        .config(Config);
        //.factory('administrationSvc', ['$http', '$q', SuperFood.AdministrationApp.AdministrationSvc.factory])
        //.controller('productTypeCtrl', SuperFood.AdministrationApp.ProductTypeCtrl);
}
