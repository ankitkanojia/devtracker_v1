using System.Web.Mvc;

namespace DevTracker.Controllers
{
    public class SingletonController : Controller
    {
        // GET: Singleton
        public ActionResult EmailTemplete()
        {
            return View();
        }
    }
}