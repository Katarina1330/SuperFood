using SuperFood.Extensions;
using SuperFood.Models;
using SuperFood.Shared.Data.Models;
using SuperFood.Shared.Services.Interfaces;
using System.Linq;
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
            var products = _repositoryService.Read<Product>().ToList();
            var viewModels = products.Select(m => m.ToViewModel()).ToList();
            return Json(viewModels, JsonRequestBehavior.AllowGet);
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