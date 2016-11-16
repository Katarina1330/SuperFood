/// <reference path="../../../scripts/typings/angularjs/angular.d.ts" />
/// <reference path="../../../scripts/typings/angularjs/angular-route.d.ts" />

module SuperFood.HomeDashboardApp {

    export class HomeDashboardSvc {

        private httpService: ng.IHttpService;
        private qService: ng.IQService;
        private getProductApiPath: string;
        private postShoppingCartApiPath: string;
        private shoppingCart: Array<SuperFood.HomeDashboardApp.Models.Product>;
        private totalPrice: number;

        constructor($http: ng.IHttpService, $q: ng.IQService) {
            this.httpService = $http;
            this.qService = $q;
            this.getProductApiPath = "ProductDashboard/GetByCategory";
            this.postShoppingCartApiPath = "Cart/SubmitOrder";
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

        public setShoppingCart(shoppingCart, totalPrice) {
            var self = this;
            self.shoppingCart = shoppingCart;
            self.totalPrice = totalPrice;
        }

        public getShoppingCart() {
            var self = this;
            debugger;
            return self.shoppingCart;
        }

        public getTotalPrice() {
            var self = this;
            return self.totalPrice;
        }

        public submitOrder(shoppingCart): ng.IPromise<any> {
            var self = this;

            var deferred = self.qService.defer();

            self.httpService.post(self.postShoppingCartApiPath, shoppingCart).then(function (result) {

                deferred.resolve(result);
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