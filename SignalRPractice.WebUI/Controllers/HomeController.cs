using SignalRPractice.WebUI.Models;
using System.Web.Mvc;

namespace SignalRPractice.WebUI.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            // create model
            ShapePageViewModel model = new ShapePageViewModel();

            // create and add shapes to model
            model.Shapes.Add(new Circle("circle2", "70px", "70px", "pink"));
            model.Shapes.Add(new Circle("circle3", "120px", "120px", "red"));

            // send model to view
            return View(model);
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
    }
}