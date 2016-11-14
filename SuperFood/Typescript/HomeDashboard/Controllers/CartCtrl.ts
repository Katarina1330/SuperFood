/// <reference path="../../../scripts/typings/angularjs/angular.d.ts" />
/// <reference path="../../../scripts/typings/angularjs/angular-route.d.ts" />
/// <reference path="../homedashboardapp.ts" />

module SuperFood.HomeDashboardApp {

    export class CartCtrl {

        private $scope: SuperFood.HomeDashboardApp.Interfaces.IHomeDashboardScope;
        private dataSvc: SuperFood.HomeDashboardApp.HomeDashboardSvc; 
        private $window: any; 

        private init() {
            
            var self = this;
            self.$scope.shoppingCart = self.dataSvc.getShoppingCart();
            self.$scope.totalPrice = self.dataSvc.getTotalPrice();

            self.$scope.removeFromCart = function (product) {
                self.removeFromCart(product);
            }

            self.$scope.submitOrder = function (shoppingCart) {
                self.dataSvc.submitOrder(shoppingCart);
                self.$window.location.replace('#home/dashboard');

            }
        }

        private removeFromCart(product) {
            var self = this;
            var index = null;
            for (var i = 0; i < self.$scope.shoppingCart.length; i++) {
                if (self.$scope.shoppingCart[i].Id == product.Id) {
                    index = i;
                    break;
                }
            }
            if (index != null) {
                self.$scope.shoppingCart.splice(index, 1);
                self.$scope.totalPrice -= product.Price;
            }
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