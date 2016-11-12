
module SuperFood.HomeDashboardApp.Interfaces {

    export interface IHomeDashboardScope extends ng.IScope {
        products: any;
        postDashboardRender: any;
        upSpinner: any;
        downSpinner: any;
        isImageEmpty: any;
        addToCart: any;
        removeFromCart: any;
        totalPrice: number;
        shoppingCart: Array<SuperFood.HomeDashboardApp.Models.Product>;
        allProducts: Array<SuperFood.HomeDashboardApp.Models.Product>;
    }
}