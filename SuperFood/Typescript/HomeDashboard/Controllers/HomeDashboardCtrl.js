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
                self.$scope.shoppingCart = [];
                self.$scope.totalPrice = 0;
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
                    self.addToCart(product);
                };
                self.$scope.downSpinner = function (product) {
                    if (!product.Amount) {
                        product.Amount = 0;
                    }
                    else {
                        product.Amount -= 1;
                    }
                    self.removeFromCart(product);
                };
                self.$scope.isImageEmpty = function (image) {
                    if (!image || image == "") {
                        return false;
                    }
                    return true;
                };
                self.$scope.addSelectedToping = function (product, toping, state) {
                    if (product.SelectedTopings == undefined) {
                        product.SelectedTopings = [];
                    }
                    if (state) {
                        product.SelectedTopings.push(toping);
                    }
                    else {
                        var index = product.SelectedTopings.indexOf(toping);
                        if (index >= 0) {
                            product.SelectedTopings.splice(index, 1);
                        }
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
            HomeDashboardCtrl.prototype.addToCart = function (product) {
                var self = this;
                self.$scope.shoppingCart.push(product);
                self.$scope.totalPrice += product.Price;
                self.dataSvc.setShoppingCart(self.$scope.shoppingCart, self.$scope.totalPrice);
            };
            HomeDashboardCtrl.prototype.removeFromCart = function (product) {
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
            };
            HomeDashboardCtrl.$inject = ['$scope', '$window', 'homeDashboardSvc'];
            return HomeDashboardCtrl;
        }());
        HomeDashboardApp.HomeDashboardCtrl = HomeDashboardCtrl;
    })(HomeDashboardApp = SuperFood.HomeDashboardApp || (SuperFood.HomeDashboardApp = {}));
})(SuperFood || (SuperFood = {}));
//# sourceMappingURL=HomeDashboardCtrl.js.map