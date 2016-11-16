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
            var order = new Order();
            order.Price = shoppingCart.Sum(p => p.Price);
            order.Date = DateTime.Now;
            order.IsNotified = false;

            _repository.Create(order);

            var groupedProduct = shoppingCart.GroupBy(p => p.Id);
            foreach (var grouped in groupedProduct)
            {
                var orderProduct = new OrderProduct();
                orderProduct.OrderId = order.Id;
                orderProduct.ProductId = grouped.First().Id;
                if (grouped.First().SelectedTopings != null && grouped.First().SelectedTopings.Any()) {
               
                    orderProduct.Toppings = string.Join(";", grouped.First().SelectedTopings);
                }
                orderProduct.Amount = grouped.Count();
                _repository.Create(orderProduct);
            }

            return View();
        }
    }
}