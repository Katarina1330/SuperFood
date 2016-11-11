/// <reference path="../../scripts/typings/angularjs/angular.d.ts" />
/// <reference path="../../scripts/typings/angularjs/angular-route.d.ts" />
var SuperFood;
(function (SuperFood) {
    var HomeDashboardApp;
    (function (HomeDashboardApp) {
        var Config = (function () {
            function Config($routeProvider) {
                $routeProvider
                    .when("/home/dashboard", { templateUrl: "../Typescript/HomeDashboard/Templates/HomeDashboard.html", controller: "homeDashboardCtrl" })
                    .when("/home/cartreview", { templateUrl: "../Typescript/HomeDashboard/Templates/CartReview.html", controller: "homeDashboardCtrl" })
                    .otherwise({ redirectTo: '/home/dashboard' });
            }
            return Config;
        }());
        HomeDashboardApp.Config = Config;
        Config.$inject = ['$routeProvider'];
        var app = angular.module("homeDashboardApp", ['ngRoute', 'ngSanitize', 'ui.bootstrap'])
            .config(Config)
            .factory('homeDashboardSvc', ['$http', '$q', SuperFood.HomeDashboardApp.HomeDashboardSvc.factory])
            .controller('homeDashboardCtrl', SuperFood.HomeDashboardApp.HomeDashboardCtrl)
            .directive('productDashboardContainer', SuperFood.HomeDashboardApp.ProductDashboardContainer.factory())
            .directive('afterRenderDashboard', SuperFood.HomeDashboardApp.AfterRenderDashboard.factory());
    })(HomeDashboardApp = SuperFood.HomeDashboardApp || (SuperFood.HomeDashboardApp = {}));
})(SuperFood || (SuperFood = {}));
//# sourceMappingURL=homedashboardapp.js.map