/// <reference path="../../../scripts/typings/angularjs/angular.d.ts" />
/// <reference path="../../../scripts/typings/angularjs/angular-route.d.ts" />
/// <reference path="../homedashboardapp.ts" />

module SuperFood.HomeDashboardApp {

    export class CartCtrl {

        private $scope: SuperFood.HomeDashboardApp.Interfaces.IHomeDashboardScope;
        private dataSvc: SuperFood.HomeDashboardApp.HomeDashboardSvc;   

        private init() {
            
            var self = this;
            self.$scope.shoppingCart = self.dataSvc.getShoppingCart();
            self.$scope.totalPrice = self.dataSvc.getTotalPrice();

        }



        static $inject = ['$scope', 'homeDashboardSvc'];

        constructor($scope: SuperFood.HomeDashboardApp.Interfaces.IHomeDashboardScope, homeDashboardSvc: SuperFood.HomeDashboardApp.HomeDashboardSvc) {
            var self = this;
            self.$scope = $scope;
            self.dataSvc = homeDashboardSvc;
            self.init();
        }

    }
}