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
    public class ProductTypeController : Controller
    {
        private readonly IRepositoryService _repository;

        public ProductTypeController(IRepositoryService repository)
        {
            _repository = repository;
        }

        // GET: ProductType
        public ActionResult Index()
        {
            var productTypes = _repository.Read<ProductType>()
                .Select(p => new ProductTypeViewModels
                {
                    Id = p.Id, 
                    Name = p.Name
                }).ToList(); 

            return View(productTypes);
        }

        public ActionResult Create()
        {
            return View();
        }

        [HttpPost]
        public ActionResult Create(ProductTypeViewModels productTypeViewModel)
        {
            var productType = new ProductType();
            productType.Name = productTypeViewModel.Name;
            _repository.Create<ProductType>(productType);
            ModelState.Clear();

            return View();
        }
    }
}