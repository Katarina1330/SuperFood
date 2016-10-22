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
    public class OrderController : Controller
    {
        private readonly IRepositoryService _repository;

        public OrderController(IRepositoryService repository)
        {
            _repository = repository;
        }

        // GET: Order
        public JsonResult GetAll()
        {
            var orders = _repository.Read<Order>();

            var viewModels = orders.Select(m => new OrderViewModel
            {
                Id = m.Id,
                UserId = m.UserId,
                Price = m.Price,
                Date = m.Date,
                IsNotified = m.IsNotified
            }).ToList();

            return Json(viewModels, JsonRequestBehavior.AllowGet);
        }
    }
}