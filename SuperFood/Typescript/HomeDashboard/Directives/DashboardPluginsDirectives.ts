/// <reference path="../../../scripts/typings/angularjs/angular.d.ts" />
/// <reference path="../../../scripts/typings/angularjs/angular-route.d.ts" />
/// <reference path="../../../scripts/typings/jquery/jquery.d.ts" />


module SuperFood.HomeDashboardApp {

    export class AfterRenderDashboard implements ng.IDirective {

        restrict = 'A';
        terminal = false;
        transclude = false;
        constructor() {

        }

        link = (scope, element, attrs) => {
            if (scope.$last) {
                var postRenderDashboard = scope.$eval(attrs.afterRenderDashboard);
                postRenderDashboard();
            }
        }

        static factory(): ng.IDirectiveFactory {
            const directive = () => new AfterRenderDashboard();
            return directive;
        }

    }
}