/// <reference path="../../../scripts/typings/angularjs/angular.d.ts" />
/// <reference path="../../../scripts/typings/angularjs/angular-route.d.ts" />
/**
 *
 * This is our data services module for Account CRUD
 */
var SuperFood;
(function (SuperFood) {
    var Services;
    (function (Services) {
        var ProductTypeService = (function () {
            /**
            * Constructor for DataSvc object
            * @param {ng.IHttpService} $http
            * @param {ng.IQService} $q
            */
            function ProductTypeService($http, $q) {
                //relative Url for MVC controller
                this.getProductTypeApiPath = "ProductType/GetAll";
                this.httpService = $http;
                this.qService = $q;
            }
            /**
             * This function is responsible to obtain all accounts from service.
             * @param fetchFromService Indicate is necessary to comunicate with server.
             */
            ProductTypeService.prototype.loadProductTypes = function () {
                var self = this;
                var deferred = self.qService.defer();
                self.httpService.get(self.getProductTypeApiPath).then(function (result) {
                    self.productTypes = result.data;
                    deferred.resolve(self.productTypes);
                }, function (error) {
                    deferred.reject(error);
                });
                return deferred.promise;
            };
            ProductTypeService.factory = function ($http, $q) {
                return new ProductTypeService($http, $q);
            };
            return ProductTypeService;
        }());
        Services.ProductTypeService = ProductTypeService;
    })(Services = SuperFood.Services || (SuperFood.Services = {}));
})(SuperFood || (SuperFood = {}));
//# sourceMappingURL=productType-service.js.map