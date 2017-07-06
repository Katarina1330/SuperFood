/// <reference path="../../../scripts/typings/angularjs/angular.d.ts" />
/// <reference path="../../../scripts/typings/angularjs/angular-route.d.ts" />

module SuperFood.Services {

    export class OrderService {

        public allOrders: any;
        private httpService: ng.IHttpService;
        private qService: ng.IQService;
        private getOrderApiPath: string;

        constructor($http: ng.IHttpService, $q: ng.IQService) {
            this.httpService = $http;
            this.qService = $q;
            this.getOrderApiPath = "Order/GetAll";
        }

        public loadOrders(): ng.IPromise<any> {
            var self = this;

            var deferred = self.qService.defer();

            self.httpService.get(self.getOrderApiPath).then(function (result) {
                deferred.resolve(result.data);
                self.allOrders = result.data;
            }, function (error) {
                deferred.reject(error);
            });

            return deferred.promise;
        };

        public static factory($http: ng.IHttpService, $q: ng.IQService): OrderService {
            return new OrderService($http, $q);
        }
    }
}