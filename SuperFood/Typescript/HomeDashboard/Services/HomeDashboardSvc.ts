/// <reference path="../../../scripts/typings/angularjs/angular.d.ts" />
/// <reference path="../../../scripts/typings/angularjs/angular-route.d.ts" />

module SuperFood.HomeDashboardApp {

    export class HomeDashboardSvc {

        private httpService: ng.IHttpService;
        private qService: ng.IQService;

        constructor($http: ng.IHttpService, $q: ng.IQService) {
            this.httpService = $http;
            this.qService = $q;
        }


        public static factory($http: ng.IHttpService, $q: ng.IQService): HomeDashboardSvc {
            return new HomeDashboardSvc($http, $q);
        }
    }
}