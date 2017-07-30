/// <reference path="../../../scripts/typings/angularjs/angular.d.ts" />
/// <reference path="../../../scripts/typings/angularjs/angular-route.d.ts" />
/// <reference path="../app.ts" />
var SuperFood;
(function (SuperFood) {
    var Cart;
    (function (Cart) {
        var CartController = (function () {
            function CartController($scope, productService) {
                var self = this;
                self.$scope = $scope;
                self.productService = productService;
                self.init();
            }
            CartController.prototype.init = function () {
                var self = this;
                self.$scope.productService = self.productService;
                self.$scope.displayDialog = false;
                self.$scope.OpenDialog = function () {
                    self.$scope.displayDialog = true;
                };
                self.$scope.cancelDialog = function () {
                    setTimeout(function () {
                        self.$scope.displayDialog = false;
                    }, 2000);
                };
            };
            CartController.$inject = ['$scope', 'productService'];
            return CartController;
        }());
        Cart.CartController = CartController;
    })(Cart = SuperFood.Cart || (SuperFood.Cart = {}));
})(SuperFood || (SuperFood = {}));
