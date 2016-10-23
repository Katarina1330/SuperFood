/// <reference path="../../../scripts/typings/angularjs/angular.d.ts" />
/// <reference path="../../../scripts/typings/angularjs/angular-route.d.ts" />

module SuperFood.HomeDashboard.Models {

    export class Product {
        Id: number;
        Name: string;
        Details: string;
        Description: string;
        Price: number;
        InStock: boolean;
        ProductType: SuperFood.AdministrationApp.Models.ProductType;
        IsDeleted: boolean;
    }
}