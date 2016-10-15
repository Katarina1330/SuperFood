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