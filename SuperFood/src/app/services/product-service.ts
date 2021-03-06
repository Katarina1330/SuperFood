﻿/// <reference path="../../../scripts/typings/angularjs/angular.d.ts" />
/// <reference path="../../../scripts/typings/angularjs/angular-route.d.ts" />

module SuperFood.Services {

    export class ProductService {

        public allProducts: any;
        public selectedProduct: any;
        public cart: any;
        private httpService: ng.IHttpService;
        private qService: ng.IQService;
        private getProductApiPath: string;
        private getAllProductApiPath: string;
        private deleteProductApiPath: string;
        private saveProductApiPath: string;
        private addProductApiPath: string;

        constructor($http: ng.IHttpService, $q: ng.IQService) {
            this.httpService = $http;
            this.qService = $q;
            this.getProductApiPath = "Product/";
            this.getAllProductApiPath = "Product/GetAll";
            this.deleteProductApiPath = "Product/Update";
            this.saveProductApiPath = "Product/Update";
            this.addProductApiPath = "Product/Add";
            this.cart = {
                products: [],
                price: 0
            };
        }

        public getProducts(actionName, value): ng.IPromise<any> {
            var self = this;

            var deferred = self.qService.defer();
            var apiPath = self.getProductApiPath + actionName + '?value=' + value;

            self.httpService.get(apiPath).then(function (result) {
                deferred.resolve(result.data);
                self.allProducts = result.data;
            }, function (error) {
                deferred.reject(error);
            });

            return deferred.promise;
        }

        public getAllProducts(): ng.IPromise<any> {
            var self = this;

            var deferred = self.qService.defer();

            self.httpService.get(self.getAllProductApiPath).then(function (result) {
                deferred.resolve(result.data);
                self.allProducts = result.data;
            }, function (error) {
                deferred.reject(error);
            });

            return deferred.promise;
        };

        public deleteProduct(product, errorCallback): ng.IPromise<any> {
            let self = this;

            let deferred = self.qService.defer();

            self.httpService.post(self.deleteProductApiPath, product).then(function (result) {
                deferred.resolve(result.data);
            }, function (error) {
                deferred.reject(error);
                errorCallback();
            });

            return deferred.promise;
        };

        public saveProduct(product, successCallback, errorCallback): ng.IPromise<any> {
            let self = this;

            let productEdit: any = {};
            productEdit.Id = product.Id;
            productEdit.Name = product.NameEdit;
            productEdit.Description = product.DescriptionEdit;
            productEdit.Details = product.Details;
            productEdit.Price = product.Price;
            productEdit.InStock = product.InStock;
            productEdit.IsDeleted = product.IsDeleted;
            productEdit.ProductType = product.ProductType;

            let deferred = self.qService.defer();

            self.httpService.post(self.saveProductApiPath, productEdit).then(function (result) {
                deferred.resolve(result.data);
                if (successCallback) {
                    successCallback();
                }
            }, function (error) {
                deferred.reject(error);
                errorCallback();
            });

            return deferred.promise;
        }

        public saveProductDialog(newProduct, successCallback, errorCallback): ng.IPromise<any> {
            let self = this;

            let deferred = self.qService.defer();

            self.httpService.post(self.addProductApiPath, newProduct).then(function (result) {
                deferred.resolve(result.data);
                self.allProducts.push(result.data);

                if (successCallback) {
                    successCallback();
                }
            }, function (error) {
                deferred.reject(error);
                if (errorCallback) {
                    errorCallback();
                }

            });

            return deferred.promise;
        }

        public static factory($http: ng.IHttpService, $q: ng.IQService): ProductService {
            return new ProductService($http, $q);
        }
    }
}