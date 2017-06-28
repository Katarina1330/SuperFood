/// <reference path="../../../scripts/typings/angularjs/angular.d.ts" />
/// <reference path="../../../scripts/typings/angularjs/angular-route.d.ts" />
var SuperFood;
(function (SuperFood) {
    var AdministrationApp;
    (function (AdministrationApp) {
        var OrderCtrl = (function () {
            function OrderCtrl($scope, dataSvc) {
                var self = this;
                self.$scope = $scope;
                self.dataSvc = dataSvc;
                self.init();
            }
            OrderCtrl.prototype.init = function () {
                var self = this;
                self.dataSvc.getOrders().then(function (result) {
                    self.$scope.allOrders = result;
                });
            };
            ;
            OrderCtrl.$inject = ['$scope', 'administrationSvc'];
            return OrderCtrl;
        }());
        AdministrationApp.OrderCtrl = OrderCtrl;
    })(AdministrationApp = SuperFood.AdministrationApp || (SuperFood.AdministrationApp = {}));
})(SuperFood || (SuperFood = {}));
