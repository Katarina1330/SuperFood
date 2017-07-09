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

            self.$scope.addSubtractNumber = 0;
            self.$scope.upSpinner = function (product) {
                if (self.$scope.addSubtractNumber < 10) {
                    self.$scope.addSubtractNumber += 1;
                }
            }

            self.$scope.downSpinner = function (product) {
                if (self.$scope.addSubtractNumber > 0) {
                    self.$scope.addSubtractNumber -= 1;
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