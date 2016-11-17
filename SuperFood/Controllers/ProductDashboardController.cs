using Newtonsoft.Json;
using SuperFood.Models;
using SuperFood.Shared.Constants;
using SuperFood.Shared.Data.Models;
using SuperFood.Shared.Services.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace SuperFood.Controllers
{
    public class ProductDashboardController : Controller
    {
        private readonly IRepositoryService _repository;

        public ProductDashboardController(IRepositoryService repository)
        {
            _repository = repository;
        }

        public string GetByCategory(string value)
        {
            IEnumerable<ProductViewModel> allProductsViewModel = null;

            if (!string.IsNullOrWhiteSpace(value))
            {
                var categoryProducts = _repository.Read<Category>()
                .Where(p => p.Identifier.ToLower() == value.ToLower())
                .Single()
                .Products;

                allProductsViewModel = ConvertToEntity(categoryProducts);
            }
            return JsonConvert.SerializeObject(allProductsViewModel);
        }

        public string GetByType(string value)
        {
            IEnumerable<ProductViewModel> allProductsViewModel = null;

            if (!string.IsNullOrWhiteSpace(value))
            {
                var typeProduct = _repository.Read<ProductType>()
                    .Where(p => p.Identifier.ToLower() == value.ToLower())
                    .Single()
                    .Products;

                allProductsViewModel = ConvertToEntity(typeProduct);
            }


            return JsonConvert.SerializeObject(allProductsViewModel);
        }

        private static IEnumerable<ProductViewModel> ConvertToEntity(ICollection<Product> allProducts)
        {
            return allProducts.Select(m => new ProductViewModel
            {
                Id = m.Id,
                Name = m.Name,
                Description = m.Description,
                Details = m.Details.Split(';'),
                InStock = m.InStock,
                IsDeleted = m.IsDeleted,
                Price = m.Price,
                Topings = m.Topings?.Split(';'),
                Image = m.Image,
                ProductType = new ProductTypeViewModel
                {
                    Id = m.ProductTypeId,
                    Name = m.ProductType.Name
                }
            });
        }
    }
}