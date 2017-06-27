/// <reference path="../../../scripts/typings/angularjs/angular.d.ts" />
/// <reference path="../../../scripts/typings/angularjs/angular-route.d.ts" />

module SuperFood.Services {

    export class ProductService {

        public allProducts: any;
        public selectedProduct: any;
        private httpService: ng.IHttpService;
        private qService: ng.IQService;
        private getProductApiPath: string;
        private getAllProductApiPath: string;

        constructor($http: ng.IHttpService, $q: ng.IQService) {
            this.httpService = $http;
            this.qService = $q;
            this.getProductApiPath = "Product/";
            this.getAllProductApiPath = "Product/GetAll";
        }

        public getProducts(actionName, value): ng.IPromise<any> {
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
        }

        public getAllProducts(): ng.IPromise<any> {
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

        public static factory($http: ng.IHttpService, $q: ng.IQService): ProductService {
            return new ProductService($http, $q);
        }
    }
}