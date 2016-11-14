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
    public class CartController : Controller
    {
        private readonly IRepositoryService _repository;

        public CartController(IRepositoryService repository)
        {
            _repository = repository;
        }

        [HttpPost]
        public ActionResult SubmitOrder(List<ProductViewModel> shoppingCart)
        {
            var products = shoppingCart.Select(p => new Product
            {
                Id = p.Id,
                Name = p.Name,
                Price = p.Price,
                Details = string.Join(";", p.Details),
                Description = p.Description,
                InStock = p.InStock,
                ProductTypeId = p.ProductType.Id,
                IsDeleted = p.IsDeleted,
                Topings = string.Join(";", p.Topings),
                Image = p.Image
            });

            var order = new Order();
            order.Price = products.Sum(p => p.Price);
            order.Date = DateTime.Now;
            order.IsNotified = false;
            order.Products = products.ToList();

            _repository.Create(order);
            return View();
        }
    }
}