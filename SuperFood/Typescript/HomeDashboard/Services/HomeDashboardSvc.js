/// <reference path="../../../scripts/typings/angularjs/angular.d.ts" />
/// <reference path="../../../scripts/typings/angularjs/angular-route.d.ts" />
var SuperFood;
(function (SuperFood) {
    var HomeDashboardApp;
    (function (HomeDashboardApp) {
        var HomeDashboardSvc = (function () {
            function HomeDashboardSvc($http, $q) {
                this.httpService = $http;
                this.qService = $q;
            }
            HomeDashboardSvc.factory = function ($http, $q) {
                return new HomeDashboardSvc($http, $q);
            };
            return HomeDashboardSvc;
        }());
        HomeDashboardApp.HomeDashboardSvc = HomeDashboardSvc;
    })(HomeDashboardApp = SuperFood.HomeDashboardApp || (SuperFood.HomeDashboardApp = {}));
})(SuperFood || (SuperFood = {}));
//# sourceMappingURL=HomeDashboardSvc.js.map