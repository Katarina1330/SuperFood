/// <reference path="../../../../scripts/typings/angularjs/angular.d.ts" />
/// <reference path="../../../../scripts/typings/angularjs/angular-route.d.ts" />
/// <reference path="../../app.ts" />
var SuperFood;
(function (SuperFood) {
    var Administration;
    (function (Administration) {
        var ProductController = (function () {
            function ProductController($scope, productService) {
                var self = this;
                self.$scope = $scope;
                self.productService = productService;
                self.init();
            }
            ProductController.prototype.init = function () {
                var self = this;
                self.$scope.productService = self.productService;
                self.productService.getAllProducts();
            };
            ProductController.$inject = ['$scope', 'productService'];
            return ProductController;
        }());
        Administration.ProductController = ProductController;
    })(Administration = SuperFood.Administration || (SuperFood.Administration = {}));
})(SuperFood || (SuperFood = {}));
