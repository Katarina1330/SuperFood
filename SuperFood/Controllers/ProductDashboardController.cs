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

        // GET: Dashboard
        public string GetByCategory(string value)
        {
            var allProducts = _repository.Read<Category>()
                .Where(p => p.Identifier.ToLower() == value.ToLower())
                .Single()
                .Products;

            var allProductsViewModel = allProducts.Select(m => new ProductViewModel
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
            return JsonConvert.SerializeObject(allProductsViewModel);
        }

        public void GetByType(string value)
        {

        }
    }
}