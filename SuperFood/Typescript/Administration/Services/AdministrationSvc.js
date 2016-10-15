/// <reference path="../../../scripts/typings/angularjs/angular.d.ts" />
/// <reference path="../../../scripts/typings/angularjs/angular-route.d.ts" />
/**
 *
 * This is our data services module for Account CRUD
 */
var SuperFood;
(function (SuperFood) {
    var AdministrationApp;
    (function (AdministrationApp) {
        //this is administration data service 
        var AdministrationSvc = (function () {
            /**
            * Constructor for DataSvc object
            * @param {ng.IHttpService} $http
            * @param {ng.IQService} $q
            */
            function AdministrationSvc($http, $q) {
                //relative Url for MVC controller
                this.productTypeApiPath = "ProductType/GetAll";
                this.httpService = $http;
                this.qService = $q;
            }
            /**
             * This function is responsible to obtain all accounts from service.
             * @param fetchFromService Indicate is necessary to comunicate with server.
             */
            AdministrationSvc.prototype.getProductTypes = function () {
                var self = this;
                var deferred = self.qService.defer();
                self.httpService.get(self.productTypeApiPath).then(function (result) {
                    self.allProductTypes = result.data;
                    deferred.resolve(self.allProductTypes);
                }, function (error) {
                    deferred.reject(error);
                });
                return deferred.promise;
            };
            /**
             * factory method for instantiating data service.
             * @param {ng.IHttpService} $http is IHttpService.
             * @param {ng.IQService} $q is IQService.
             * @returns UserDataSvc instance.
             */
            AdministrationSvc.factory = function ($http, $q) {
                return new AdministrationSvc($http, $q);
            };
            return AdministrationSvc;
        }());
        AdministrationApp.AdministrationSvc = AdministrationSvc;
    })(AdministrationApp = SuperFood.AdministrationApp || (SuperFood.AdministrationApp = {}));
})(SuperFood || (SuperFood = {}));
//# sourceMappingURL=AdministrationSvc.js.map