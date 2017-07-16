﻿using Newtonsoft.Json;
using SuperFood.Extensions;
using SuperFood.Models;
using SuperFood.Shared.Data.Models;
using SuperFood.Shared.Services.Interfaces;
using System.Collections.Generic;
using System.Linq;
using System.Web.Mvc;
using System;

namespace SuperFood.Controllers
{
    [Obsolete("Avoid this class and use ProductController instead.")]
    public class ProductDashboardController : Controller
    {
        private readonly IRepositoryService _repository;

        public ProductDashboardController(IRepositoryService repository)
        {
            _repository = repository;
        }

        public JsonResult GetByCategory(string value)
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
            return Json(allProductsViewModel, JsonRequestBehavior.AllowGet);
        }

        public string GetByType(string value)
        {
            IEnumerable<ProductViewModel> allProductsViewModel = null;

            if (!string.IsNullOrWhiteSpace(value))
            {
                var productType = _repository.Read<ProductType>()
                    .Where(p => p.Name.ToLower() == value.ToLower())
                    .SingleOrDefault();

                if (productType != null)
                    allProductsViewModel = productType.Products.Select(m => m.ToViewModel());
            }

            return JsonConvert.SerializeObject(allProductsViewModel);
        }
    }
}