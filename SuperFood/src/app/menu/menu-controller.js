/// <reference path="../../../scripts/typings/angularjs/angular.d.ts" />
/// <reference path="../../../scripts/typings/angularjs/angular-route.d.ts" />
/// <reference path="../app.ts" />
var SuperFood;
(function (SuperFood) {
    var Menu;
    (function (Menu) {
        var MenuController = (function () {
            function MenuController($scope, $routeParams, productService) {
                var self = this;
                self.$scope = $scope;
                self.$routeParams = $routeParams;
                self.productService = productService;
                self.init();
            }
            MenuController.prototype.init = function () {
                var self = this;
                self.$scope.productService = self.productService;
                var actionName = self.$routeParams.key;
                var value = self.$routeParams.value;
                self.productService.getProducts(actionName, value);
            };
            MenuController.$inject = ['$scope', '$routeParams', 'productService'];
            return MenuController;
        }());
        Menu.MenuController = MenuController;
    })(Menu = SuperFood.Menu || (SuperFood.Menu = {}));
})(SuperFood || (SuperFood = {}));
