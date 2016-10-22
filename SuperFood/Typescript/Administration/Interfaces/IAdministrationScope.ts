/**
 * 
 * Extensions to ng scope
 */
module SuperFood.AdministrationApp.Interfaces {
    export interface IAdministrationScope extends ng.IScope {
        getProductTypes: any;
        addNewProductType: any;
        deleteProductType: any;
        createProduct: any;
        updateProductDetails: any;
        allOrders: Array<SuperFood.AdministrationApp.Models.Order>;
        newProduct: SuperFood.AdministrationApp.Models.Product;
        allProducts: Array<SuperFood.AdministrationApp.Models.Product>;
        newProductType: SuperFood.AdministrationApp.Models.ProductType;
        allProductTypes: Array<SuperFood.AdministrationApp.Models.ProductType>;
    }
}
