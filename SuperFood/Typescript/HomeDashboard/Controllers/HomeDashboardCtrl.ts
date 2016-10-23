/// <reference path="../../../scripts/typings/angularjs/angular.d.ts" />
/// <reference path="../../../scripts/typings/angularjs/angular-route.d.ts" />
/// <reference path="../homedashboardapp.ts" />

module SuperFood.HomeDashboardApp {

    export class HomeDashboardCtrl {

        private $scope: SuperFood.HomeDashboardApp.Interfaces.IHomeDashboardScope;
        private dataSvc: SuperFood.HomeDashboardApp.HomeDashboardSvc;

        private init() {
            var self = this;

            self.dataSvc.getProducts().then(function (result) {
                self.$scope.allProducts = result
            });
        }

        static $inject = ['$scope', 'homeDashboardSvc'];

        constructor($scope: SuperFood.HomeDashboardApp.Interfaces.IHomeDashboardScope, homeDashboardSvc: SuperFood.HomeDashboardApp.HomeDashboardSvc){
            var self = this;
            self.$scope = $scope;
            self.dataSvc = homeDashboardSvc;
            self.init();
        }
    }
}