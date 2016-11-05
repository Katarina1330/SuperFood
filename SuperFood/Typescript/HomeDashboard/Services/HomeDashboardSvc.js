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
                this.getProductApiPath = "Dashboard/GetAllProducts";
            }
            HomeDashboardSvc.prototype.getProducts = function () {
                var self = this;
                var deferred = self.qService.defer();
                self.httpService.get(self.getProductApiPath).then(function (result) {
                    deferred.resolve(result.data);
                }, function (error) {
                    deferred.reject(error);
                });
                return deferred.promise;
            };
            HomeDashboardSvc.factory = function ($http, $q) {
                return new HomeDashboardSvc($http, $q);
            };
            return HomeDashboardSvc;
        }());
        HomeDashboardApp.HomeDashboardSvc = HomeDashboardSvc;
    })(HomeDashboardApp = SuperFood.HomeDashboardApp || (SuperFood.HomeDashboardApp = {}));
})(SuperFood || (SuperFood = {}));
//# sourceMappingURL=HomeDashboardSvc.js.map