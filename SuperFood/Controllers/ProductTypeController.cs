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
                    Description = p.Description,

                }).ToList();

            return Json(productTypes, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public JsonResult Create(ProductType productType)
        {
            _repository.Create(productType);
            return Json(productType);
        }

        [HttpPost]
        public JsonResult Edit(ProductType productType)
        {
            _repository.Updata(productType);
            return Json(productType);
        }
    }
}