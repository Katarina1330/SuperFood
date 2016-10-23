/// <reference path="../../../scripts/typings/angularjs/angular.d.ts" />
/// <reference path="../../../scripts/typings/angularjs/angular-route.d.ts" />

module SuperFood.HomeDashboardApp {

    export class ProductDashboardContainer implements ng.IDirective {

        templateUrl = '/Typescript/HomeDashboard/Templates/ProductWidget.html';
        restrict = 'E';

        constructor() {
            
        }

        static factory(): ng.IDirectiveFactory {
            const directive = () => new ProductDashboardContainer();
            return directive;
        }
    }
}