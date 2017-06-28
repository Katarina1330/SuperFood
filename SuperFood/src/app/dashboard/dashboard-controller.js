/// <reference path="../../../scripts/typings/angularjs/angular.d.ts" />
/// <reference path="../../../scripts/typings/angularjs/angular-route.d.ts" />
/// <reference path="../app.ts" />
var SuperFood;
(function (SuperFood) {
    var Dashboard;
    (function (Dashboard) {
        var DashboardController = (function () {
            function DashboardController($scope, productService) {
                this.defaulutActionName = 'getbycategory';
                this.defaultCategory = 'topdeals';
                var self = this;
                self.$scope = $scope;
                self.productService = productService;
                self.init();
            }
            DashboardController.prototype.init = function () {
                var self = this;
                self.$scope.productService = self.productService;
                self.productService.getProducts(this.defaulutActionName, this.defaultCategory);
            };
            DashboardController.$inject = ['$scope', 'productService'];
            return DashboardController;
        }());
        Dashboard.DashboardController = DashboardController;
    })(Dashboard = SuperFood.Dashboard || (SuperFood.Dashboard = {}));
})(SuperFood || (SuperFood = {}));
