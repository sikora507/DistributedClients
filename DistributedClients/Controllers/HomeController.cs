using Microsoft.AspNetCore.Mvc;

namespace DistributedClients.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return File("~/index.html","text/html");
        }
    }
}
