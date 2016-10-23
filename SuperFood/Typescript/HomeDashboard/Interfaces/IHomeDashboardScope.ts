
module SuperFood.HomeDashboardApp.Interfaces {

    export interface IHomeDashboardScope extends ng.IScope {
        products: any;
        allProducts: Array<SuperFood.HomeDashboardApp.Models.Product>;
    }
}