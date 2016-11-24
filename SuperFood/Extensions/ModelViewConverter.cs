using SuperFood.Models;
using SuperFood.Shared.Data.Models;

namespace SuperFood.Extensions
{
    public static class ModelViewConverter
    {
        public static Product ToEntity(this ProductViewModel productViewModel)
        {
            var product = new Product();
            product.Id = productViewModel.Id;
            product.Name = productViewModel.Name;
            product.Details = string.Join(";", productViewModel.Details);
            product.Description = productViewModel.Description;
            product.Price = productViewModel.Price;
            product.InStock = productViewModel.InStock;
            product.IsDeleted = productViewModel.IsDeleted;
            product.ProductTypeId = productViewModel.ProductType.Id;

            return product;
        }
    }
}