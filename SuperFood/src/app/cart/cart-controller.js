/// <reference path="../../../scripts/typings/angularjs/angular.d.ts" />
/// <reference path="../../../scripts/typings/angularjs/angular-route.d.ts" />
/// <reference path="../app.ts" />
var SuperFood;
(function (SuperFood) {
    var Cart;
    (function (Cart) {
        var CartController = (function () {
            function CartController($scope, productService, $timeout, $location) {
                var self = this;
                self.$scope = $scope;
                self.productService = productService;
                self.$timeout = $timeout;
                self.$location = $location;
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
                    self.$scope.orderSubmited = true;
                    self.$timeout(function () {
                        self.$scope.displayDialog = false;
                        self.$scope.orderSubmited = true;
                        self.$location.url('/home/dashboard');
                    }, 2000);
                };
            };
            CartController.$inject = ['$scope', 'productService', '$timeout', '$location'];
            return CartController;
        }());
        Cart.CartController = CartController;
    })(Cart = SuperFood.Cart || (SuperFood.Cart = {}));
})(SuperFood || (SuperFood = {}));
