using Newtonsoft.Json;
using SuperFood.Models;
using SuperFood.Shared.Data.Implementations;
using SuperFood.Shared.Services.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace SuperFood.Controllers
{
    public class DashboardController : Controller
    {
        private readonly IRepositoryService _repository;

        public DashboardController(IRepositoryService repository)
        {
            _repository = repository;
        }

        // GET: Dashboard
        public string GetAllProducts()
        {
            var allProducts = _repository.Read<Product>();

            var allProductsViewModel = allProducts.Select(m => new ProductViewModel
            {
                Id = m.Id,
                Name = m.Name,
                Description = m.Description,
                Details = m.Details,
                InStock = m.InStock,
                IsDeleted = m.IsDeleted,
                Price = m.Price,
                ProductType = new ProductTypeViewModel
                {
                    Id = m.ProductTypeId,
                    Name = m.ProductType.Name
                }
            });

            return JsonConvert.SerializeObject(allProductsViewModel);
        }
    }
}