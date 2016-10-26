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
                self.$scope.allProducts = result
            });

            self.$scope.postDashboardRender = function () {
                self.initUIComponents();
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

        constructor($scope: SuperFood.HomeDashboardApp.Interfaces.IHomeDashboardScope, $window: any, homeDashboardSvc: SuperFood.HomeDashboardApp.HomeDashboardSvc){
            var self = this;
            self.$scope = $scope;
            self.$window = $window;
            self.dataSvc = homeDashboardSvc;
            self.init();
        }
    }
}