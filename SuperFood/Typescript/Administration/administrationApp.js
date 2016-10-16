/// <reference path="../../scripts/typings/angularjs/angular.d.ts" />
/// <reference path="../../scripts/typings/angularjs/angular-route.d.ts" />
/**
 *
 * Application for admin view
 */
var SuperFood;
(function (SuperFood) {
    var AdministrationApp;
    (function (AdministrationApp) {
        /**
         * admin profile
         */
        var Config = (function () {
            function Config($routeProvider) {
                $routeProvider
                    .when("/administration/producttypes", { templateUrl: "../Typescript/Administration/Templates/ProductTypeDashboard.html", controller: "productTypeCtrl" })
                    .when("/administration/product", { templateUrl: "../Typescript/Administration/Templates/ProductDashboard.html", controller: "productCtrl" })
                    .when("/administration/product/add", { templateUrl: "../Typescript/Administration/Templates/AddProduct.html", controller: "productCtrl" })
                    .otherwise({ redirectTo: '/admin/dashboard' });
            }
            return Config;
        }());
        AdministrationApp.Config = Config;
        //dependency injection -- from the constructor, typed IRouteProvider
        Config.$inject = ['$routeProvider'];
        //set up the controllers, data service, and directives for the app
        var app = angular.module("administrationApp", ['ngRoute', 'ngSanitize'])
            .config(Config)
            .factory('administrationSvc', ['$http', '$q', SuperFood.AdministrationApp.AdministrationSvc.factory])
            .controller('productTypeCtrl', SuperFood.AdministrationApp.ProductTypeCtrl)
            .controller('productCtrl', SuperFood.AdministrationApp.ProductCtrl);
    })(AdministrationApp = SuperFood.AdministrationApp || (SuperFood.AdministrationApp = {}));
})(SuperFood || (SuperFood = {}));
