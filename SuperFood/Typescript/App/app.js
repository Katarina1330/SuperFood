/// <reference path="../../scripts/typings/angularjs/angular.d.ts" />
/// <reference path="../../scripts/typings/angularjs/angular-route.d.ts" />
/**
 *
 * angular application module with config, one controller, and a data service
 */
var SuperFood;
(function (SuperFood) {
    var App;
    (function (App) {
        var Config = (function () {
            function Config() {
            }
            return Config;
        }());
        App.Config = Config;
        Config.$inject = [];
        //inject all submodules for the app
        var app = angular.module('app', ['administrationApp'])
            .config(Config);
    })(App = SuperFood.App || (SuperFood.App = {}));
})(SuperFood || (SuperFood = {}));
//# sourceMappingURL=app.js.map