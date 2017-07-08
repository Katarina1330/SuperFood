/// <reference path="../../../../scripts/typings/angularjs/angular.d.ts" />
/// <reference path="../../../../scripts/typings/angularjs/angular-route.d.ts" />
/// <reference path="../../app.ts" />
var SuperFood;
(function (SuperFood) {
    var Administration;
    (function (Administration) {
        var ProductTypeController = (function () {
            function ProductTypeController($scope, productTypeService) {
                var self = this;
                self.$scope = $scope;
                self.$scope.productTypeService = productTypeService;
                self.init();
            }
            ProductTypeController.prototype.init = function () {
                var self = this;
                self.$scope.productTypeService.loadProductTypes();
            };
            ProductTypeController.$inject = ['$scope', 'productTypeService'];
            return ProductTypeController;
        }());
        Administration.ProductTypeController = ProductTypeController;
    })(Administration = SuperFood.Administration || (SuperFood.Administration = {}));
})(SuperFood || (SuperFood = {}));
