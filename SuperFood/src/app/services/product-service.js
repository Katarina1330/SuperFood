/// <reference path="../../../scripts/typings/angularjs/angular.d.ts" />
/// <reference path="../../../scripts/typings/angularjs/angular-route.d.ts" />
var SuperFood;
(function (SuperFood) {
    var Services;
    (function (Services) {
        var ProductService = (function () {
            function ProductService($http, $q) {
                this.httpService = $http;
                this.qService = $q;
                this.getProductApiPath = "Product/";
                this.getAllProductApiPath = "Product/GetAll";
            }
            ProductService.prototype.getProducts = function (actionName, value) {
                var self = this;
                var deferred = self.qService.defer();
                var apiPath = self.getProductApiPath + actionName + '?value=' + value;
                self.httpService.get(apiPath).then(function (result) {
                    deferred.resolve(result.data);
                    self.selectedProduct = result.data;
                }, function (error) {
                    deferred.reject(error);
                });
                return deferred.promise;
            };
            ProductService.prototype.getAllProducts = function () {
                var self = this;
                var deferred = self.qService.defer();
                self.httpService.get(self.getAllProductApiPath).then(function (result) {
                    deferred.resolve(result.data);
                    self.allProducts = result.data;
                }, function (error) {
                    deferred.reject(error);
                });
                return deferred.promise;
            };
            ;
            ProductService.factory = function ($http, $q) {
                return new ProductService($http, $q);
            };
            return ProductService;
        }());
        Services.ProductService = ProductService;
    })(Services = SuperFood.Services || (SuperFood.Services = {}));
})(SuperFood || (SuperFood = {}));
