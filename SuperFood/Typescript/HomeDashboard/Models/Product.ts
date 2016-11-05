/// <reference path="../../../scripts/typings/angularjs/angular.d.ts" />
/// <reference path="../../../scripts/typings/angularjs/angular-route.d.ts" />

module SuperFood.HomeDashboardApp.Models {

    export class Product {
        Id: number;
        Name: string;
        Description: string;
        Price: number;
        InStock: boolean;
        Details: Array<string>;
        ProductType: SuperFood.AdministrationApp.Models.ProductType;
        IsDeleted: boolean;
        Amount: number;
    }
}