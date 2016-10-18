﻿using SuperFood.Models;
using SuperFood.Shared.Data.Implementations;
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
                ProductType = new ProductTypeViewModel { Id = m.ProductType.Id, Name = m.ProductType.Name},
                IsDeleted = m.IsDeleted
            }).ToList();
            return Json(viewModels, JsonRequestBehavior.AllowGet);
        }

       
    }
}