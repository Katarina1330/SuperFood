/// <reference path="../../../scripts/typings/angularjs/angular.d.ts" />
/// <reference path="../../../scripts/typings/angularjs/angular-route.d.ts" />

/**
 * 
 * Controller for the accounts view
 */
module SuperFood.AdministrationApp {
    /**
     * create instance of account controller
     */
    export class ProductTypeCtrl {

        private $scope: SuperFood.AdministrationApp.Interfaces.IAdministrationScope;
        private dataSvc: SuperFood.AdministrationApp.AdministrationSvc;

        private init() {

            var self = this;
            self.dataSvc.getProductTypes().then(function (result) {
                self.$scope.allProductTypes = result;
            });
        }

        //protect against minification
        static $inject = [ '$scope', 'administrationSvc'];

		/**
		* constructor for this instance
		*/
        constructor($scope: SuperFood.AdministrationApp.Interfaces.IAdministrationScope, dataSvc: SuperFood.AdministrationApp.AdministrationSvc) {
            var self = this;
            self.$scope = $scope;
            self.dataSvc = dataSvc;
            self.init();
        }
    }
}