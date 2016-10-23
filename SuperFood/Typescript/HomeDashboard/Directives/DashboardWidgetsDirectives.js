/// <reference path="../../../scripts/typings/angularjs/angular.d.ts" />
/// <reference path="../../../scripts/typings/angularjs/angular-route.d.ts" />
var SuperFood;
(function (SuperFood) {
    var HomeDashboardApp;
    (function (HomeDashboardApp) {
        var ProductDashboardContainer = (function () {
            function ProductDashboardContainer() {
                this.templateUrl = '/Typescript/HomeDashboard/Templates/ProductWidget.html';
                this.restrict = 'E';
            }
            ProductDashboardContainer.factory = function () {
                var directive = function () { return new ProductDashboardContainer(); };
                return directive;
            };
            return ProductDashboardContainer;
        }());
        HomeDashboardApp.ProductDashboardContainer = ProductDashboardContainer;
    })(HomeDashboardApp = SuperFood.HomeDashboardApp || (SuperFood.HomeDashboardApp = {}));
})(SuperFood || (SuperFood = {}));
//# sourceMappingURL=DashboardWidgetsDirectives.js.map