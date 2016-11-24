using Newtonsoft.Json;
using SuperFood.Extensions;
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
                .SingleOrDefault();

                if (categoryProducts != null)
                    allProductsViewModel = categoryProducts.Products.Select(m => m.ToViewModel());
            }
            return JsonConvert.SerializeObject(allProductsViewModel);
        }

        public string GetByType(string value)
        {
            IEnumerable<ProductViewModel> allProductsViewModel = null;

            if (!string.IsNullOrWhiteSpace(value))
            {
                var productType = _repository.Read<ProductType>()
                    .Where(p => p.Identifier.ToLower() == value.ToLower())
                    .SingleOrDefault();

                if (productType != null)
                    allProductsViewModel = productType.Products.Select(m => m.ToViewModel());
            }

            return JsonConvert.SerializeObject(allProductsViewModel);
        }
    }
}