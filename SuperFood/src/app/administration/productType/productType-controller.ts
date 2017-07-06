/// <reference path="../../../../scripts/typings/angularjs/angular.d.ts" />
/// <reference path="../../../../scripts/typings/angularjs/angular-route.d.ts" />
/// <reference path="../../app.ts" />

module SuperFood.Administration {

    export class ProductTypeController {

        public $scope: any;

        private init() {
            var self = this;
            self.$scope.productTypeService.loadProductTypes();
        }

        static $inject = ['$scope', 'productTypeService'];
        constructor($scope: any, productTypeService: any) {
            var self = this;
            self.$scope = $scope;
            self.$scope.productTypeService = productTypeService;
            self.init();
        }
    }
}


