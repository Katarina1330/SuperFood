/// <reference path="../../../scripts/typings/angularjs/angular.d.ts" />
/// <reference path="../../../scripts/typings/angularjs/angular-route.d.ts" />
/**
 *
 * Controller for the accounts view
 */
var SuperFood;
(function (SuperFood) {
    var AdministrationApp;
    (function (AdministrationApp) {
        /**
         * create instance of account controller
         */
        var ProductTypeCtrl = (function () {
            /**
            * constructor for this instance
            */
            function ProductTypeCtrl($scope, dataSvc) {
                var self = this;
                self.$scope = $scope;
                self.dataSvc = dataSvc;
                self.init();
            }
            ProductTypeCtrl.prototype.init = function () {
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
            };
            //protect against minification
            ProductTypeCtrl.$inject = ['$scope', 'administrationSvc'];
            return ProductTypeCtrl;
        }());
        AdministrationApp.ProductTypeCtrl = ProductTypeCtrl;
    })(AdministrationApp = SuperFood.AdministrationApp || (SuperFood.AdministrationApp = {}));
})(SuperFood || (SuperFood = {}));
