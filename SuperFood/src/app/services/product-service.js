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
                this.postShoppingCartApiPath = "Cart/SubmitOrder";
            }
            ProductService.prototype.getProducts = function (actionName, value) {
                var self = this;
                var deferred = self.qService.defer();
                var apiPath = self.getProductApiPath + actionName + '?value=' + value;
                self.httpService.get(apiPath).then(function (result) {
                    deferred.resolve(result.data);
                    self.allProducts = result.data;
                }, function (error) {
                    deferred.reject(error);
                });
                return deferred.promise;
            };
            ProductService.prototype.setShoppingCart = function (shoppingCart, totalPrice) {
                var self = this;
                self.shoppingCart = shoppingCart;
                self.totalPrice = totalPrice;
            };
            ProductService.prototype.getShoppingCart = function () {
                var self = this;
                debugger;
                return self.shoppingCart;
            };
            ProductService.prototype.getTotalPrice = function () {
                var self = this;
                return self.totalPrice;
            };
            ProductService.prototype.submitOrder = function (shoppingCart) {
                var self = this;
                var deferred = self.qService.defer();
                self.httpService.post(self.postShoppingCartApiPath, shoppingCart).then(function (result) {
                    deferred.resolve(result);
                }, function (error) {
                    deferred.reject(error);
                });
                return deferred.promise;
            };
            ProductService.factory = function ($http, $q) {
                return new ProductService($http, $q);
            };
            return ProductService;
        }());
        Services.ProductService = ProductService;
    })(Services = SuperFood.Services || (SuperFood.Services = {}));
})(SuperFood || (SuperFood = {}));
//# sourceMappingURL=product-service.js.map