/// <reference path="../../../scripts/typings/angularjs/angular.d.ts" />
/// <reference path="../../../scripts/typings/angularjs/angular-route.d.ts" />

/**
 * 
 * This is our data services module for Account CRUD
 */
module SuperFood.AdministrationApp {
    //this is our data service -- will handle ajax calls to loadprofile controller
    export class AdministrationSvc {

        private httpService: ng.IHttpService;
        private qService: ng.IQService;
        private productTypeApiPath: string;
        private allProductTypes: Array<SuperFood.AdministrationApp.Models.ProductType>;

        /**
        * Constructor for DataSvc object
        * @param {ng.IHttpService} $http
        * @param {ng.IQService} $q
        */
        constructor($http: ng.IHttpService, $q: ng.IQService) {
            //relative Url for MVC controller
            this.productTypeApiPath = "ProductType/Index";
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

            self.httpService.get(self.productTypeApiPath).then(function (result: any) {
                self.allProductTypes = result.data;

                deferred.resolve(self.allProductTypes);
            }, function (error) {
                deferred.reject(error);
            });
            return deferred.promise;
        }

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
