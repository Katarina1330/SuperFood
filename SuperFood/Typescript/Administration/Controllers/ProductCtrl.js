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
            };
            ;
            ProductCtrl.$inject = ['$scope', 'administrationSvc'];
            return ProductCtrl;
        }());
        AdministrationApp.ProductCtrl = ProductCtrl;
    })(AdministrationApp = SuperFood.AdministrationApp || (SuperFood.AdministrationApp = {}));
})(SuperFood || (SuperFood = {}));
