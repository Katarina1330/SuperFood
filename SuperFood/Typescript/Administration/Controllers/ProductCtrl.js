/// <reference path="../../../scripts/typings/angularjs/angular.d.ts" />
/// <reference path="../../../scripts/typings/angularjs/angular-route.d.ts" />
var SuperFood;
(function (SuperFood) {
    var AdministrationApp;
    (function (AdministrationApp) {
        var ProductCtrl = (function () {
            function ProductCtrl($scope, dataSvc) {
                var self = this;
                self.$scope = $scope;
                self.dataSvc = dataSvc;
                self.init();
            }
            ProductCtrl.prototype.init = function () {
                var self = this;
                self.dataSvc.getProducts().then(function (result) {
                    self.$scope.allProducts = result;
                });
                self.dataSvc.getProductTypes().then(function (result) {
                    self.$scope.allProductTypes = result;
                });
                self.$scope.createProduct = function (newProduct) {
                    self.dataSvc.createProduct(newProduct).then(function (result) {
                        self.$scope.allProducts.push(result);
                    });
                };
            };
            ;
            ProductCtrl.$inject = ['$scope', 'administrationSvc'];
            return ProductCtrl;
        }());
        AdministrationApp.ProductCtrl = ProductCtrl;
    })(AdministrationApp = SuperFood.AdministrationApp || (SuperFood.AdministrationApp = {}));
})(SuperFood || (SuperFood = {}));
//# sourceMappingURL=ProductCtrl.js.map