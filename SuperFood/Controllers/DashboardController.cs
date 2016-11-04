using Newtonsoft.Json;
using SuperFood.Models;
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
            //var allProducts = _repository.Read<Product>();

            //var allProductsViewModel = allProducts.Select(m => new ProductViewModel
            //{
            //    Id = m.Id,
            //    Name = m.Name,
            //    Description = m.Description,
            //    Details = m.Details,
            //    InStock = m.InStock,
            //    IsDeleted = m.IsDeleted,
            //    Price = m.Price,
            //    ProductType = new ProductTypeViewModel
            //    {
            //        Id = m.ProductTypeId,
            //        Name = m.ProductType.Name
            //    }
            //});

            var a1 = new ProductViewModel { Id = 1, Name = "Name1", ProductType = new ProductTypeViewModel { Id = 1, Name = "11" } };
            var a2 = new ProductViewModel { Id = 2, Name = "Name2", ProductType = new ProductTypeViewModel { Id = 2, Name = "12" } };
            var a3 = new ProductViewModel { Id = 3, Name = "Name3", ProductType = new ProductTypeViewModel { Id = 3, Name = "13" } };
            var a4 = new ProductViewModel { Id = 2, Name = "Name2", ProductType = new ProductTypeViewModel { Id = 2, Name = "12" } };
            var a5 = new ProductViewModel { Id = 3, Name = "Name3", ProductType = new ProductTypeViewModel { Id = 3, Name = "13" } };

            var allProductsViewModel = new List<ProductViewModel> { a1, a2, a3, a4, a5 };
            return JsonConvert.SerializeObject(allProductsViewModel);
        }
    }
}