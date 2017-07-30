/// <reference path="../../../scripts/typings/angularjs/angular.d.ts" />
/// <reference path="../../../scripts/typings/angularjs/angular-route.d.ts" />
/// <reference path="../app.ts" />

module SuperFood.Cart {

    export class CartController {

        public $scope: any;
        public productService: SuperFood.Services.ProductService;

        private init() {
            var self = this;
            self.$scope.productService = self.productService;

           self.$scope.displayDialog = false;

           self.$scope.OpenDialog = function () {
               self.$scope.displayDialog = true;
            }

           self.$scope.cancelDialog = function () {
               
               setTimeout(function () {
                   self.$scope.displayDialog = false;
               }, 2000)
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