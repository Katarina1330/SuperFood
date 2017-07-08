/// <reference path="../../../scripts/typings/angularjs/angular.d.ts" />
/// <reference path="../../../scripts/typings/angularjs/angular-route.d.ts" />
var SuperFood;
(function (SuperFood) {
    var Services;
    (function (Services) {
        var OrderService = (function () {
            function OrderService($http, $q) {
                this.httpService = $http;
                this.qService = $q;
                this.getOrderApiPath = "Order/GetAll";
            }
            OrderService.prototype.loadOrders = function () {
                var self = this;
                var deferred = self.qService.defer();
                self.httpService.get(self.getOrderApiPath).then(function (result) {
                    deferred.resolve(result.data);
                    self.allOrders = result.data;
                }, function (error) {
                    deferred.reject(error);
                });
                return deferred.promise;
            };
            ;
            OrderService.factory = function ($http, $q) {
                return new OrderService($http, $q);
            };
            return OrderService;
        }());
        Services.OrderService = OrderService;
    })(Services = SuperFood.Services || (SuperFood.Services = {}));
})(SuperFood || (SuperFood = {}));
