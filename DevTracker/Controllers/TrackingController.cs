using System.Web.Mvc;

namespace DevTracker.Controllers
{
    public class TrackingController : Controller
    {
        // GET: Tracking
        public ActionResult Index()
        {
            return View();
        }
    }
}