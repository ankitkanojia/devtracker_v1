using System.Linq;
using System.Web.Mvc;
using DevTracker.WebHelpers;
using Repository.Helpers;
using Repository.Models;
using Repository.Models.ViewModels;

namespace DevTracker.Controllers
{
    [CheckAuthorization]
    public class DashboardController : Controller
    {
        private DBEntities _entities = new DBEntities();

        public ActionResult Index()
        {
            using (_entities = new DBEntities())
            {
                var dashboardVm = new DashboardVm();

                //Total Resources
                var totalUsers = _entities.UserMasters.Where(s => s.RoleMasterId != (int) EnumList.Roles.Owner)
                    .ToList();
                dashboardVm.Tdesigner = totalUsers.Where(s => s.RoleMasterId == (int) EnumList.Roles.Developer).ToList()
                    .Count;
                dashboardVm.TprojectManager = totalUsers
                    .Where(s => s.RoleMasterId == (int) EnumList.Roles.Project_Manager).ToList().Count;
                dashboardVm.TteamLeader = totalUsers.Where(s => s.RoleMasterId == (int) EnumList.Roles.Team_Leader)
                    .ToList().Count;
                dashboardVm.TotalResource = totalUsers.Count;

                return View(dashboardVm);
            }
        }
    }
}