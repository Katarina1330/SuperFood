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
    public class ProductTypeController : Controller
    {
        private readonly IRepositoryService _repository;

        public ProductTypeController(IRepositoryService repository)
        {
            _repository = repository;
        }

        [HttpGet]
        public JsonResult GetAll()
        {
            var productTypes = _repository.Read<ProductType>()
                .Select(p => new ProductTypeViewModel
                {
                    Id = p.Id, 
                    Name = p.Name,
                    Description = p.Description
                }).ToList(); 

            return Json(productTypes, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public JsonResult Create(ProductTypeViewModel productTypeViewModel)
        {
            var productType = new ProductType();
            productType.Name = productTypeViewModel.Name;
            productType.Description = productTypeViewModel.Description;
            _repository.Create(productType);
            productTypeViewModel.Id = productType.Id;
            return Json(productTypeViewModel);
        }

        [HttpGet]
        public void Delete(string id)
        {
            var productType = new ProductType();
            productType.Id = int.Parse(id);
            _repository.Delete(productType);
        }
    }
}