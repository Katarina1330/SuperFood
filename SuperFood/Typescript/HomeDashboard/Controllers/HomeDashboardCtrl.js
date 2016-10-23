/// <reference path="../../../scripts/typings/angularjs/angular.d.ts" />
/// <reference path="../../../scripts/typings/angularjs/angular-route.d.ts" />
/// <reference path="../homedashboardapp.ts" />
var SuperFood;
(function (SuperFood) {
    var HomeDashboardApp;
    (function (HomeDashboardApp) {
        var HomeDashboardCtrl = (function () {
            function HomeDashboardCtrl($scope, homeDashboardSvc) {
                var self = this;
                self.$scope = $scope;
                self.dataSvc = homeDashboardSvc;
                self.init();
            }
            HomeDashboardCtrl.prototype.init = function () {
            };
            HomeDashboardCtrl.$inject = ['$scope', 'homeDashboardSvc'];
            return HomeDashboardCtrl;
        }());
        HomeDashboardApp.HomeDashboardCtrl = HomeDashboardCtrl;
    })(HomeDashboardApp = SuperFood.HomeDashboardApp || (SuperFood.HomeDashboardApp = {}));
})(SuperFood || (SuperFood = {}));
//# sourceMappingURL=HomeDashboardCtrl.js.map