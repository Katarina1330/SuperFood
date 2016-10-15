/// <reference path="../../../scripts/typings/angularjs/angular.d.ts" />
/// <reference path="../../../scripts/typings/angularjs/angular-route.d.ts" />

/**
 * 
 * This is our data services module for Account CRUD
 */
module SuperFood.AdministrationApp {
    //this is administration data service 
    export class AdministrationSvc {

        private httpService: ng.IHttpService;
        private qService: ng.IQService;
        private getProductTypeApiPath: string;
        private createProductTypeApiPath: string;
        private allProductTypes: Array<SuperFood.AdministrationApp.Models.ProductType>;

        /**
        * Constructor for DataSvc object
        * @param {ng.IHttpService} $http
        * @param {ng.IQService} $q
        */
        constructor($http: ng.IHttpService, $q: ng.IQService) {
            //relative Url for MVC controller
            this.getProductTypeApiPath = "ProductType/GetAll";
            this.createProductTypeApiPath = "ProductType/Create";
            this.httpService = $http;
            this.qService = $q;
        }

        /**
         * This function is responsible to obtain all accounts from service.
         * @param fetchFromService Indicate is necessary to comunicate with server.
         */
        public getProductTypes(): ng.IPromise<any> {
            var self = this;

            var deferred = self.qService.defer();

            self.httpService.get(self.getProductTypeApiPath).then(function (result: any) {
                self.allProductTypes = result.data;

                deferred.resolve(self.allProductTypes);
            }, function (error) {
                deferred.reject(error);
            });
            return deferred.promise;
        }

        /**
         * Create new product type
         * @param newProductType this is new product type model
         */
        public createProductType(newProductType: any): ng.IPromise<any> {
            var self = this;

            var deferred = self.qService.defer();

            self.httpService.post(self.createProductTypeApiPath, newProductType).then(function (result) {
                deferred.resolve(result.data);

            }, function (error) {
                deferred.reject(error);
            });

            return deferred.promise;
        }

        public deleteById(apiPath: string): ng.IPromise<any> {

            var self = this;

            var deferred = self.qService.defer();

            self.httpService.get(apiPath).then(function (result) {
                deferred.resolve(result);
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
        public static factory($http: ng.IHttpService, $q: ng.IQService): AdministrationSvc {
            return new AdministrationSvc($http, $q);
        }
    }
}
