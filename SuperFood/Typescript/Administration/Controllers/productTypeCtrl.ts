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

            self.$scope.addNewProductType = function (newProductType) {
                self.dataSvc.createProductType(newProductType).then(function (result) {
                    self.$scope.allProductTypes.push(result);
                    self.$scope.newProductType = undefined;
                });
            };

            self.$scope.deleteProductType = function (productTypeId) {
                var apiPath = "ProductType/Delete?id=" + productTypeId;
                self.dataSvc.deleteById(apiPath).then(function () {
                    var index;
                    for (var i = 0; i < self.$scope.allProductTypes.length; i++){
                        var element = self.$scope.allProductTypes[i];
                        if (element.Id == productTypeId) {
                            index = i;
                            break;
                        }
                    }

                    if (index) {
                        self.$scope.allProductTypes.splice(index, 1);
                    }
                });
            };
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