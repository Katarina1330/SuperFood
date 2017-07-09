/// <reference path="../../../../scripts/typings/angularjs/angular.d.ts" />
/// <reference path="../../../../scripts/typings/angularjs/angular-route.d.ts" />
/// <reference path="../../app.ts" />

module SuperFood.Administration {

    export class ProductController {

        private $scope: any;
        private productService: SuperFood.Services.ProductService;

        private init() {
            let self = this;
            self.$scope.productService = self.productService;
            self.productService.getAllProducts();

            self.$scope.deleteProduct = function (product) {
                self.productService.deleteProduct(product, function () {
                    product.IsDeleted = !product.IsDeleted;
                    alert("Operation failed! Please try later.");
                });
            }

            self.$scope.editProduct = function (product) {
                product.IsEdit = true;
                product.NameEdit = product.Name;
                product.DescriptionEdit = product.Description;
            }

            self.$scope.saveProduct = function (product) {

                self.productService.saveProduct(product, function () {
                    product.Name = product.NameEdit;
                    product.Description = product.DescriptionEdit;
                    product.IsEdit = false;
                }, function () {
                    alert("Operation is failed! Please try later.");
                });


            }

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
            }

            self.$scope.cancelProductDialog = function () {
                self.$scope.addProductDialog = false;
            };
        }


        static $inject = ['$scope', 'productService'];

        constructor($scope: SuperFood.HomeDashboardApp.Interfaces.IHomeDashboardScope, productService: SuperFood.Services.ProductService) {
            var self = this;
            self.$scope = $scope;
            self.productService = productService;
            self.init();
        }
    }
}