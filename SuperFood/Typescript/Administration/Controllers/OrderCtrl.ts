/// <reference path="../../../scripts/typings/angularjs/angular.d.ts" />
/// <reference path="../../../scripts/typings/angularjs/angular-route.d.ts" />

module SuperFood.AdministrationApp {

    export class OrderCtrl {
        private $scope: SuperFood.AdministrationApp.Interfaces.IAdministrationScope;
        private dataSvc: SuperFood.AdministrationApp.AdministrationSvc;

        private init() {

            var self = this;

            self.dataSvc.getOrders().then(function (result) {
                self.$scope.allOrders = result;
            });
        };

        static $inject = ['$scope', 'administrationSvc'];

        constructor($scope: SuperFood.AdministrationApp.Interfaces.IAdministrationScope, dataSvc: SuperFood.AdministrationApp.AdministrationSvc) {
            var self = this;
            self.$scope = $scope;
            self.dataSvc = dataSvc;
            self.init();
        }
    }
}