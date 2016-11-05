/// <reference path="../../../scripts/typings/angularjs/angular.d.ts" />
/// <reference path="../../../scripts/typings/angularjs/angular-route.d.ts" />
/// <reference path="../../../scripts/typings/jquery/jquery.d.ts" />
var SuperFood;
(function (SuperFood) {
    var HomeDashboardApp;
    (function (HomeDashboardApp) {
        var AfterRenderDashboard = (function () {
            function AfterRenderDashboard() {
                this.restrict = 'A';
                this.terminal = false;
                this.transclude = false;
                this.link = function (scope, element, attrs) {
                    if (scope.$last) {
                        var postRenderDashboard = scope.$eval(attrs.afterRenderDashboard);
                        postRenderDashboard();
                    }
                };
            }
            AfterRenderDashboard.factory = function () {
                var directive = function () { return new AfterRenderDashboard(); };
                return directive;
            };
            return AfterRenderDashboard;
        }());
        HomeDashboardApp.AfterRenderDashboard = AfterRenderDashboard;
    })(HomeDashboardApp = SuperFood.HomeDashboardApp || (SuperFood.HomeDashboardApp = {}));
})(SuperFood || (SuperFood = {}));
