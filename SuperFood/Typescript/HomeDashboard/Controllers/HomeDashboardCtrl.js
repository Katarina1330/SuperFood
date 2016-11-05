/// <reference path="../../../scripts/typings/angularjs/angular.d.ts" />
/// <reference path="../../../scripts/typings/angularjs/angular-route.d.ts" />
/// <reference path="../homedashboardapp.ts" />
var SuperFood;
(function (SuperFood) {
    var HomeDashboardApp;
    (function (HomeDashboardApp) {
        var HomeDashboardCtrl = (function () {
            function HomeDashboardCtrl($scope, $window, homeDashboardSvc) {
                var self = this;
                self.$scope = $scope;
                self.$window = $window;
                self.dataSvc = homeDashboardSvc;
                self.init();
            }
            HomeDashboardCtrl.prototype.init = function () {
                var self = this;
                self.dataSvc.getProducts().then(function (result) {
                    self.$scope.allProducts = result;
                });
                self.$scope.postDashboardRender = function () {
                    self.initUIComponents();
                };
                self.$scope.upSpinner = function (product) {
                    if (!product.Amount) {
                        product.Amount = 1;
                    }
                    else {
                        if (product.Amount < 10) {
                            product.Amount += 1;
                        }
                    }
                };
                self.$scope.downSpinner = function (product) {
                    if (!product.Amount) {
                        product.Amount = 0;
                    }
                    else {
                        product.Amount -= 1;
                    }
                };
            };
            HomeDashboardCtrl.prototype.initUIComponents = function () {
                if ($('html').hasClass('salvattore')) {
                    return;
                }
                this.$window.salvattore.init();
                $('html').addClass('salvattore');
            };
            HomeDashboardCtrl.$inject = ['$scope', '$window', 'homeDashboardSvc'];
            return HomeDashboardCtrl;
        }());
        HomeDashboardApp.HomeDashboardCtrl = HomeDashboardCtrl;
    })(HomeDashboardApp = SuperFood.HomeDashboardApp || (SuperFood.HomeDashboardApp = {}));
})(SuperFood || (SuperFood = {}));
