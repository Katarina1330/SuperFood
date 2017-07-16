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
            product.Details = productViewModel.Details == null ? null : string.Join(";", productViewModel.Details);
            product.Description = productViewModel.Description;
            product.Price = productViewModel.Price;
            product.InStock = productViewModel.InStock;
            product.IsDeleted = productViewModel.IsDeleted;
            product.ProductTypeId = productViewModel.ProductType == null ? null : productViewModel.ProductType.Id;
            product.Image = productViewModel.Image;
            product.Topings = productViewModel.Topings == null ? null : string.Join(";", productViewModel.Topings);

            return product;
        }
    }
}