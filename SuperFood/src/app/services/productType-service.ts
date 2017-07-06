/// <reference path="../../../scripts/typings/angularjs/angular.d.ts" />
/// <reference path="../../../scripts/typings/angularjs/angular-route.d.ts" />

/**
 * 
 * This is our data services module for Account CRUD
 */
module SuperFood.Services {
  
    export class ProductTypeService {

        private httpService: ng.IHttpService;
        private qService: ng.IQService;
        private getProductTypeApiPath: string;

        public productTypes: any;

        /**
        * Constructor for DataSvc object
        * @param {ng.IHttpService} $http
        * @param {ng.IQService} $q
        */
        constructor($http: ng.IHttpService, $q: ng.IQService) {
            //relative Url for MVC controller
            this.getProductTypeApiPath = "ProductType/GetAll";
            this.httpService = $http;
            this.qService = $q;
        }

        /**
         * This function is responsible to obtain all accounts from service.
         * @param fetchFromService Indicate is necessary to comunicate with server.
         */
        public loadProductTypes(): ng.IPromise<any> {
            var self = this;

            var deferred = self.qService.defer();

            self.httpService.get(self.getProductTypeApiPath).then(function (result: any) {
                self.productTypes = result.data;

                deferred.resolve(self.productTypes);
            }, function (error) {
                deferred.reject(error);
            });
            return deferred.promise;
        }

        public static factory($http: ng.IHttpService, $q: ng.IQService): ProductTypeService {
            return new ProductTypeService($http, $q);
        }
    }
}
