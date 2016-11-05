
module SuperFood.HomeDashboardApp.Interfaces {

    export interface IHomeDashboardScope extends ng.IScope {
        products: any;
        postDashboardRender: any;
        upSpinner: any;
        downSpinner: any;
        allProducts: Array<SuperFood.HomeDashboardApp.Models.Product>;
    }
}