using SuperFood.Extensions;
using SuperFood.Models;
using SuperFood.Shared.Data.Models;
using SuperFood.Shared.Services.Interfaces;
using System.Linq;
using System.Web.Mvc;
using System.Collections.Generic;

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
            var products = _repositoryService.Read<Product>().ToList();
            var viewModels = products.Select(m => m.ToViewModel()).ToList();
            return Json(viewModels, JsonRequestBehavior.AllowGet);
        }

        [HttpGet]
        public JsonResult GetByCategory(string value)
        {
            IEnumerable<ProductViewModel> allProductsViewModel = null;

            if (!string.IsNullOrWhiteSpace(value))
            {
                var categoryProducts = _repositoryService.Read<Category>()
                .Where(p => p.Identifier.ToLower() == value.ToLower())
                .SingleOrDefault();

                if (categoryProducts != null)
                    allProductsViewModel = categoryProducts.Products.Select(m => m.ToViewModel());
            }
            return Json(allProductsViewModel, JsonRequestBehavior.AllowGet);
        }

        [HttpGet]
        public JsonResult GetByType(string value)
        {
            IEnumerable<ProductViewModel> allProductsViewModel = null;

            if (!string.IsNullOrWhiteSpace(value))
            {
                var productType = _repositoryService.Read<ProductType>()
                    .Where(p => p.Identifier.ToLower() == value.ToLower())
                    .SingleOrDefault();

                if (productType != null)
                    allProductsViewModel = productType.Products.Select(m => m.ToViewModel());
            }

            return Json(allProductsViewModel, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public JsonResult Create(ProductViewModel newProduct)
        {
            var product = newProduct.ToEntity();

            _repositoryService.Create(product);
            newProduct.Id = product.Id;
            return Json(newProduct);
        }

        [HttpPost]
        public void Update(ProductViewModel product)
        {
            var productEntity = product.ToEntity();

            _repositoryService.Updata(productEntity);
        }
    }
}