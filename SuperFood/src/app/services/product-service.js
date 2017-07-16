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
                this.deleteProductApiPath = "Product/Update";
                this.saveProductApiPath = "Product/Update";
                this.addProductApiPath = "Product/Add";
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
            ProductService.prototype.deleteProduct = function (product, errorCallback) {
                var self = this;
                var deferred = self.qService.defer();
                self.httpService.post(self.deleteProductApiPath, product).then(function (result) {
                    deferred.resolve(result.data);
                }, function (error) {
                    deferred.reject(error);
                    errorCallback();
                });
                return deferred.promise;
            };
            ;
            ProductService.prototype.saveProduct = function (product, successCallback, errorCallback) {
                var self = this;
                var productEdit = {};
                productEdit.Id = product.Id;
                productEdit.Name = product.NameEdit;
                productEdit.Description = product.DescriptionEdit;
                productEdit.Details = product.Details;
                productEdit.Price = product.Price;
                productEdit.InStock = product.InStock;
                productEdit.IsDeleted = product.IsDeleted;
                productEdit.ProductType = product.ProductType;
                var deferred = self.qService.defer();
                self.httpService.post(self.saveProductApiPath, productEdit).then(function (result) {
                    deferred.resolve(result.data);
                    if (successCallback) {
                        successCallback();
                    }
                }, function (error) {
                    deferred.reject(error);
                    errorCallback();
                });
                return deferred.promise;
            };
            ProductService.prototype.saveProductDialog = function (newProduct, successCallback, errorCallback) {
                var self = this;
                var deferred = self.qService.defer();
                self.httpService.post(self.addProductApiPath, newProduct).then(function (result) {
                    deferred.resolve(result.data);
                    self.allProducts.push(result.data);
                    if (successCallback) {
                        successCallback();
                    }
                }, function (error) {
                    deferred.reject(error);
                    if (errorCallback) {
                        errorCallback();
                    }
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
