/// <reference path="../../../scripts/typings/angularjs/angular.d.ts" />
/// <reference path="../../../scripts/typings/angularjs/angular-route.d.ts" />
/// <reference path="../app.ts" />

module SuperFood.Menu {

    export class MenuController {

        public $scope: any;
        public productService: SuperFood.Services.ProductService;
        private $routeParams: any;


        private init() {
            var self = this;
            self.$scope.productService = self.productService;
            var actionName = self.$routeParams.key;
            var value = self.$routeParams.value;

            self.productService.getProducts(actionName, value);


        }




        static $inject = ['$scope', '$routeParams', 'productService'];

        constructor($scope: any, $routeParams: any, productService: SuperFood.Services.ProductService) {
            var self = this;
            self.$scope = $scope;
            self.$routeParams = $routeParams;
            self.productService = productService;
            self.init();
        }
    }
}