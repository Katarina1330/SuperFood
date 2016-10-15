/**
 * 
 * Extensions to ng scope
 */
module SuperFood.AdministrationApp.Interfaces {
    export interface IAdministrationScope extends ng.IScope {
        getProductTypes: any;
        addNewProductType: any;
        newProductType: SuperFood.AdministrationApp.Models.ProductType;
        allProductTypes: Array<SuperFood.AdministrationApp.Models.ProductType>;
    }
}
