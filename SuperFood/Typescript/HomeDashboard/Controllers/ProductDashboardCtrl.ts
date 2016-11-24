/// <reference path="../../../scripts/typings/angularjs/angular.d.ts" />
/// <reference path="../../../scripts/typings/angularjs/angular-route.d.ts" />
/// <reference path="../homedashboardapp.ts" />

module SuperFood.HomeDashboardApp {

    export class ProductDashboardCtrl {

        private $scope: SuperFood.HomeDashboardApp.Interfaces.IHomeDashboardScope;
        private dataSvc: SuperFood.HomeDashboardApp.HomeDashboardSvc;
        private $window: any;
        private $routeParams: any;
        private defaulutActionName = 'getbycategory';
        private defaultValue = 'topdeals';

        private init() {
            var self = this;
            var actionName = self.$routeParams.key;
            var value = self.$routeParams.value;

            if (actionName == undefined || value == undefined){
                actionName = self.defaulutActionName;
                value = self.defaultValue;
            }

            self.$scope.shoppingCart = [];
            self.$scope.totalPrice = 0;

            self.dataSvc.getProducts(actionName, value).then(function (result) {
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
                        self.addToCart(product);
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

                self.removeFromCart(product);
            }

            self.$scope.isImageEmpty = function (image) {
                if (!image || image == "") {
                    return false;
                }
                return true;
            }

            self.$scope.addSelectedToping = function (product, toping, state) {
                if (product.SelectedTopings == undefined) {
                    product.SelectedTopings = [];
                }
                if (state) {
                    product.SelectedTopings.push(toping)
                } else {
                    var index = product.SelectedTopings.indexOf(toping);
                    if (index >= 0) {
                        product.SelectedTopings.splice(index, 1);
                    }
                }
            }
        }

        private initUIComponents() {
            if ($('html').hasClass('salvattore')) {
                return;
            }

            this.$window.salvattore.init();
            $('html').addClass('salvattore');
        }

        private addToCart(product) {
            var self = this;
            self.$scope.shoppingCart.push(product);
            self.$scope.totalPrice += product.Price;
            self.dataSvc.setShoppingCart(self.$scope.shoppingCart, self.$scope.totalPrice);
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

        static $inject = ['$scope', '$window', '$routeParams', 'homeDashboardSvc'];

        constructor($scope: SuperFood.HomeDashboardApp.Interfaces.IHomeDashboardScope, $window: any, $routeParams: any, homeDashboardSvc: SuperFood.HomeDashboardApp.HomeDashboardSvc) {
            var self = this;
            self.$scope = $scope;
            self.$window = $window;
            self.$routeParams = $routeParams;
            self.dataSvc = homeDashboardSvc;
            self.init();
        }
    }
}