/// <reference path="../../../scripts/typings/angularjs/angular.d.ts" />
/// <reference path="../../../scripts/typings/angularjs/angular-route.d.ts" />
/// <reference path="../homedashboardapp.ts" />
var SuperFood;
(function (SuperFood) {
    var HomeDashboardApp;
    (function (HomeDashboardApp) {
        var CartCtrl = (function () {
            function CartCtrl($scope, homeDashboardSvc) {
                var self = this;
                self.$scope = $scope;
                self.dataSvc = homeDashboardSvc;
                self.init();
            }
            CartCtrl.prototype.init = function () {
                var self = this;
                self.$scope.shoppingCart = self.dataSvc.getShoppingCart();
                self.$scope.totalPrice = self.dataSvc.getTotalPrice();
            };
            CartCtrl.$inject = ['$scope', 'homeDashboardSvc'];
            return CartCtrl;
        }());
        HomeDashboardApp.CartCtrl = CartCtrl;
    })(HomeDashboardApp = SuperFood.HomeDashboardApp || (SuperFood.HomeDashboardApp = {}));
})(SuperFood || (SuperFood = {}));
//# sourceMappingURL=CartCtrl.js.map