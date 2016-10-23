/// <reference path="../../../scripts/typings/angularjs/angular.d.ts" />
/// <reference path="../../../scripts/typings/angularjs/angular-route.d.ts" />

module SuperFood.HomeDashboardApp {

    export class HomeDashboardSvc {

        private httpService: ng.IHttpService;
        private qService: ng.IQService;
        private getProductApiPath: string;

        constructor($http: ng.IHttpService, $q: ng.IQService) {
            this.httpService = $http;
            this.qService = $q;
            this.getProductApiPath = "Dashboard/GetAllProducts";
        }

        public getProducts(): ng.IPromise<any> {
            var self = this;

            var deferred = self.qService.defer();

            self.httpService.get(self.getProductApiPath).then(function (result) {
                deferred.resolve(result.data);
            }, function (error) {
                deferred.reject(error);
            });

            return deferred.promise;
        }


        public static factory($http: ng.IHttpService, $q: ng.IQService): HomeDashboardSvc {
            return new HomeDashboardSvc($http, $q);
        }
    }
}