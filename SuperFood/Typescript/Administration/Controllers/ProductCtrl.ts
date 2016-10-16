﻿/// <reference path="../../../scripts/typings/angularjs/angular.d.ts" />
/// <reference path="../../../scripts/typings/angularjs/angular-route.d.ts" />

module SuperFood.AdministrationApp {

    export class ProductCtrl {

        private $scope: SuperFood.AdministrationApp.Interfaces.IAdministrationScope;
        private dataSvc: SuperFood.AdministrationApp.AdministrationSvc;

        private init() {

            var self = this;

            self.dataSvc.getProducts().then(function (result) {
                self.$scope.allProducts = result
            });
            
        };

        static $inject = ['$scope', 'administrationSvc' ];

        constructor($scope: SuperFood.AdministrationApp.Interfaces.IAdministrationScope, dataSvc: SuperFood.AdministrationApp.AdministrationSvc) {
            var self = this;
            self.$scope = $scope;
            self.dataSvc = dataSvc;
            self.init();
        }
    }
}