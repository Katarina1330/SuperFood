/// <reference path="../../../scripts/typings/angularjs/angular.d.ts" />
/// <reference path="../../../scripts/typings/angularjs/angular-route.d.ts" />
/// <reference path="../app.ts" />

module SuperFood.Dashboard {

    export class DashboardController {

        public $scope: any;
        public productService: SuperFood.Services.ProductService;
        private defaulutActionName = 'getbycategory';
        private defaultCategory = 'topdeals';


        private init() {
            let self = this;
            self.$scope.productService = self.productService;
            self.productService.getProducts(this.defaulutActionName, this.defaultCategory);
           
            self.$scope.upSpinner = function (product) {
                if (!product.addSubtractNumber) {
                    product.addSubtractNumber = 0;
                }
                if (product.addSubtractNumber < 10) {
                    product.addSubtractNumber += 1;
                    self.productService.cart.products.push(product);
                    self.productService.cart.price += product.Price;
                }
            }

            self.$scope.downSpinner = function (product) {

                if (!product.addSubtractNumber) {
                    product.addSubtractNumber = 0;
                }

                if (product.addSubtractNumber > 0) {
                    product.addSubtractNumber -= 1;
                    var index = self.productService.cart.products.indexOf(product);
                    if (index > -1) {
                        self.productService.cart.products.splice(index, 1);
                        self.productService.cart.price -= product.Price;
                    }
                }
            }


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