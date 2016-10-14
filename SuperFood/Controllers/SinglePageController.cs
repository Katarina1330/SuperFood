using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace SuperFood.Controllers
{
    public class SinglePageController : Controller
    {
        // GET: SinglePage
        public ActionResult App()
        {
            return View("AppView");
        }
    }
}