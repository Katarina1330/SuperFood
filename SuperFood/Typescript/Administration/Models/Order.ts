/// <reference path="../../../scripts/typings/angularjs/angular.d.ts" />
/// <reference path="../../../scripts/typings/angularjs/angular-route.d.ts" />

module SuperFood.AdministrationApp.Models {

    export class Order{

        Id: number;
        Price: number;
        Date: string;
        IsNotified: boolean;
    }
}