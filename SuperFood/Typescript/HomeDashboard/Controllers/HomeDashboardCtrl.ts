/// <reference path="../../../scripts/typings/angularjs/angular.d.ts" />
/// <reference path="../../../scripts/typings/angularjs/angular-route.d.ts" />
/// <reference path="../homedashboardapp.ts" />

module SuperFood.HomeDashboardApp {

    export class HomeDashboardCtrl {

        private $scope: SuperFood.HomeDashboardApp.Interfaces.IHomeDashboardScope;
        private dataSvc: SuperFood.HomeDashboardApp.HomeDashboardSvc;
        private $window: any;

        private init() {
            var self = this;

            self.dataSvc.getProducts().then(function (result) {
                self.$scope.allProducts = <Array<SuperFood.HomeDashboardApp.Models.Product>>result
            });

            self.$scope.postDashboardRender = function () {
                self.initUIComponents();
            }

            self.$scope.upSpinner = function (product) {
                if (!product.Amount) {
                    product.Amount = 1;
                } else {
                    if (product.Amount < 10) {
                        product.Amount += 1;
                    }
                }
            }

            self.$scope.downSpinner = function (product) {
                if (!product.Amount) {
                    product.Amount = 0;
                } else {
                    product.Amount -= 1;
                }
            }

            self.$scope.isImageEmpty = function (image) {
                if (!image || image == "") {
                    return false;
                }
                return true;
            }
        }

        private initUIComponents() {
            if ($('html').hasClass('salvattore')) {
                return;
            }

            this.$window.salvattore.init();
            $('html').addClass('salvattore');
        }


        static $inject = ['$scope', '$window', 'homeDashboardSvc'];

        constructor($scope: SuperFood.HomeDashboardApp.Interfaces.IHomeDashboardScope, $window: any, homeDashboardSvc: SuperFood.HomeDashboardApp.HomeDashboardSvc) {
            var self = this;
            self.$scope = $scope;
            self.$window = $window;
            self.dataSvc = homeDashboardSvc;
            self.init();
        }
    }
}