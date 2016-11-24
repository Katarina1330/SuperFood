using Newtonsoft.Json;
using SuperFood.Extensions;
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
    public class OrderController : Controller
    {
        private readonly IRepositoryService _repository;

        public OrderController(IRepositoryService repository)
        {
            _repository = repository;
        }

        // GET: Order
        public string GetAll()
        {
            var orders = _repository.Read<Order>();
            var viewModels = orders.Select(m => m.ToViewModel()).ToList();
            return JsonConvert.SerializeObject(viewModels);
        }
    }
}