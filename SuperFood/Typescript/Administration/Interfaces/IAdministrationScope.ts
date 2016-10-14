/**
 * 
 * Extensions to ng scope and route
 */
module SuperFood.AdministrationApp.Interfaces {
    export interface IAdministrationScope extends ng.IScope {
        getProductTypes: any;
        allProductTypes: Array<SuperFood.AdministrationApp.Models.ProductType>;
    }
}
