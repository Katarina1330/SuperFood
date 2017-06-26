/// <reference path="../../../scripts/typings/angularjs/angular.d.ts" />
/// <reference path="../../../scripts/typings/angularjs/angular-route.d.ts" />
/// <reference path="../app.ts" />

module SuperFood.Dashboard {

    export class DashboardController {

        private $scope: any;
        private productService: SuperFood.Services.ProductService;
        private defaulutActionName = 'getbycategory';
        private defaultCategory = 'topdeals';

        private init() {
            let self = this;
            self.$scope.productService = self.productService;
            self.productService.getProducts(this.defaulutActionName, this.defaultCategory);
        }

        static $inject = ['$scope','productService'];

        constructor($scope: SuperFood.HomeDashboardApp.Interfaces.IHomeDashboardScope, productService: SuperFood.Services.ProductService) {
            var self = this;
            self.$scope = $scope;
            self.productService = productService;
            self.init();
        }
    }
}