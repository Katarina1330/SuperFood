using SuperFood.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace SuperFood.Controllers
{
    public class CartController : Controller
    {
        [HttpPost]
        public ActionResult SubmitOrder(List<ProductViewModel> shoppingCart)
        {


            return View();
        }
    }
}