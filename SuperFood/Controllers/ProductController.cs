using SuperFood.Models;
using SuperFood.Shared.Data.Models;
using SuperFood.Shared.Services.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace SuperFood.Controllers
{
    public class ProductController : Controller
    {
        private readonly IRepositoryService _repositoryService;

        public ProductController(IRepositoryService repositoryService)
        {
            _repositoryService = repositoryService;
        }

        [HttpGet]
        public JsonResult GetAll()
        {
            var products = _repositoryService.Read<Product>();

            var viewModels = products.Select(m => new ProductViewModel
            {
                Id = m.Id,
                Name = m.Name,
                Details = m.Details,
                Description = m.Description,
                Price = m.Price,
                InStock = m.InStock,
                ProductType = new ProductTypeViewModel { Id = m.ProductType.Id, Name = m.ProductType.Name },
                IsDeleted = m.IsDeleted
            }).ToList();
            return Json(viewModels, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public JsonResult Create(ProductViewModel newProduct)
        {
            var product = new Product();

            product.Id = newProduct.Id;
            product.Name = newProduct.Name;
            product.Details = newProduct.Details;
            product.Description = newProduct.Description;
            product.Price = newProduct.Price;
            product.InStock = newProduct.InStock;
            product.IsDeleted = newProduct.IsDeleted;
            product.ProductTypeId = newProduct.ProductType.Id;

            _repositoryService.Create(product);
            newProduct.Id = product.Id;
            return Json(newProduct);
        }

        [HttpPost]
        public void Update(ProductViewModel product)
        {
            var productEntity = new Product
            {
                Id = product.Id,
                Name = product.Name,
                Details = product.Details,
                Description = product.Description,
                Price = product.Price,
                InStock = product.InStock,
                IsDeleted = product.IsDeleted,
                ProductTypeId = product.ProductType.Id
            };

            _repositoryService.Updata(productEntity);
        }
    }
}