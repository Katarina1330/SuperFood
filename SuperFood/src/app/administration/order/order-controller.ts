/// <reference path="../../../../scripts/typings/angularjs/angular.d.ts" />
/// <reference path="../../../../scripts/typings/angularjs/angular-route.d.ts" />
/// <reference path="../../app.ts" />

module SuperFood.Administration {

    export class OrderController {

        public $scope: any;

        private init() {
            var self = this;
            self.$scope.orderService.loadOrders();
        }

        static $inject = ['$scope', 'orderService'];
        constructor($scope: any, orderService: any) {
            var self = this;
            self.$scope = $scope;
            self.$scope.orderService = orderService;
            self.init();
        }
    }
}