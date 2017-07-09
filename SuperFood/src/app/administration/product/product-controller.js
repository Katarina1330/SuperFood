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
                self.$scope.deleteProduct = function (product) {
                    self.productService.deleteProduct(product, function () {
                        product.IsDeleted = !product.IsDeleted;
                        alert("Operation failed! Please try later.");
                    });
                };
                self.$scope.editProduct = function (product) {
                    product.IsEdit = true;
                    product.NameEdit = product.Name;
                    product.DescriptionEdit = product.Description;
                };
                self.$scope.saveProduct = function (product) {
                    self.productService.saveProduct(product, function () {
                        product.Name = product.NameEdit;
                        product.Description = product.DescriptionEdit;
                        product.IsEdit = false;
                    }, function () {
                        alert("Operation is failed! Please try later.");
                    });
                };
                self.$scope.cancelProduct = function (product) {
                    product.IsEdit = false;
                };
                self.$scope.addProduct = function () {
                    self.$scope.addProductDialog = true;
                };
                self.$scope.saveProductDialog = function (newProduct) {
                    self.productService.saveProductDialog(newProduct, function () {
                        self.$scope.addProductDialog = false;
                    }, function () {
                        alert("Operation is failed! Please try later.");
                    });
                };
                self.$scope.cancelProductDialog = function () {
                    self.$scope.addProductDialog = false;
                };
            };
            ProductController.$inject = ['$scope', 'productService'];
            return ProductController;
        }());
        Administration.ProductController = ProductController;
    })(Administration = SuperFood.Administration || (SuperFood.Administration = {}));
})(SuperFood || (SuperFood = {}));
