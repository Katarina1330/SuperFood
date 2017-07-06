/// <reference path="../../../../scripts/typings/angularjs/angular.d.ts" />
/// <reference path="../../../../scripts/typings/angularjs/angular-route.d.ts" />
/// <reference path="../../app.ts" />
var SuperFood;
(function (SuperFood) {
    var Administration;
    (function (Administration) {
        var OrderController = (function () {
            function OrderController($scope, orderService) {
                var self = this;
                self.$scope = $scope;
                self.$scope.orderService = orderService;
                self.init();
            }
            OrderController.prototype.init = function () {
                var self = this;
                self.$scope.orderService.loadOrders();
            };
            OrderController.$inject = ['$scope', 'orderService'];
            return OrderController;
        }());
        Administration.OrderController = OrderController;
    })(Administration = SuperFood.Administration || (SuperFood.Administration = {}));
})(SuperFood || (SuperFood = {}));
//# sourceMappingURL=order-controller.js.map