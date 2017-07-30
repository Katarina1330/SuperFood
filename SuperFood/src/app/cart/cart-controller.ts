/// <reference path="../../../scripts/typings/angularjs/angular.d.ts" />
/// <reference path="../../../scripts/typings/angularjs/angular-route.d.ts" />
/// <reference path="../app.ts" />

module SuperFood.Cart {

    export class CartController {

        public $scope: any;
        public productService: SuperFood.Services.ProductService;
        private $timeout: any;
        private $location: any;

        private init() {
            var self = this;
           
            self.$scope.productService = self.productService;
           self.$scope.displayDialog = false;

           self.$scope.OpenDialog = function () {
               self.$scope.displayDialog = true;
            }

           self.$scope.cancelDialog = function () {
               self.$scope.orderSubmited = true;
               self.$timeout(function () {
                   self.$scope.displayDialog = false;
                   self.$scope.orderSubmited = true;
                   self.$location.url('/home/dashboard');
               }, 2000);

           }

          
        }

        static $inject = ['$scope', 'productService', '$timeout', '$location'];
        constructor($scope: SuperFood.HomeDashboardApp.Interfaces.IHomeDashboardScope, productService: SuperFood.Services.ProductService, $timeout: any, $location:any) {
            var self = this;
            self.$scope = $scope;
            self.productService = productService;
            self.$timeout = $timeout;
            self.$location = $location;
            self.init();
        }

    }
}