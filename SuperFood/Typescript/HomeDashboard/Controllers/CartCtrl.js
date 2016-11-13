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
                self.$scope.removeFromCart = function (product) {
                    self.removeFromCart(product);
                };
                self.$scope.submitOrder = function (shoppingCart) {
                    self.dataSvc.submitOrder(shoppingCart);
                };
            };
            CartCtrl.prototype.removeFromCart = function (product) {
                var self = this;
                var index = null;
                for (var i = 0; i < self.$scope.shoppingCart.length; i++) {
                    if (self.$scope.shoppingCart[i].Id == product.Id) {
                        index = i;
                        break;
                    }
                }
                if (index != null) {
                    self.$scope.shoppingCart.splice(index, 1);
                    self.$scope.totalPrice -= product.Price;
                }
            };
            CartCtrl.$inject = ['$scope', 'homeDashboardSvc'];
            return CartCtrl;
        }());
        HomeDashboardApp.CartCtrl = CartCtrl;
    })(HomeDashboardApp = SuperFood.HomeDashboardApp || (SuperFood.HomeDashboardApp = {}));
})(SuperFood || (SuperFood = {}));
//# sourceMappingURL=CartCtrl.js.map