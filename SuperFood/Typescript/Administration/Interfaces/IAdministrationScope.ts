/**
 * 
 * Extensions to ng scope
 */
module SuperFood.AdministrationApp.Interfaces {
    export interface IAdministrationScope extends ng.IScope {
        getProductTypes: any;
        allProductTypes: Array<SuperFood.AdministrationApp.Models.ProductType>;
    }
}
