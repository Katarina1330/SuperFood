/// <reference path="../../scripts/typings/angularjs/angular.d.ts" />
/// <reference path="../../scripts/typings/angularjs/angular-route.d.ts" />
/**
 *
 * Application for hybrid admin view
 */
var SuperFood;
(function (SuperFood) {
    var AdministrationApp;
    (function (AdministrationApp) {
        /**
         * admin profile controller makes comparison data
         * it available for the charting view
         */
        var Config = (function () {
            function Config() {
            }
            return Config;
        }());
        AdministrationApp.Config = Config;
        //dependency injection -- from the constructor, typed IRouteProvider
        Config.$inject = []; //['$routeProvider'];
        //set up the controllers, data service, and directives for the app
        var app = angular.module("administrationApp", ['ngRoute', 'ngSanitize'])
            .config(Config);
    })(AdministrationApp = SuperFood.AdministrationApp || (SuperFood.AdministrationApp = {}));
})(SuperFood || (SuperFood = {}));
//# sourceMappingURL=administrationApp.js.map