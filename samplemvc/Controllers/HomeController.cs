using samplemvc.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace samplemvc.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
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

        public ActionResult CheckCookies()
        {
            return View();
        }

        public ActionResult PopupDesktop()
        {
            return View();
        }

        public ActionResult PopupMobile()
        {
            return View();
        }

        //**********************************************************************************************************************//
        //****************************************Popup subscription code start ********** Added on 02-17-2016******************
        //************************************************************************************************************************//
        [HttpPost]
        public PartialViewResult PopupAweberForm(NewUsersPopup model)
        {
           
            try
            {
                if (ModelState.IsValid)
                {  
                    string Email = Request.Params["Email"].ToString();
                    bool customerexists;
                    if (Email.ToLower() == "robert@test.com")
                    {
                        customerexists = true;
                    }
                    else
                    {
                        customerexists = false;
                    }

                    if (!customerexists)
                    {
                        //You Logic. Save email into the database, etc. 
                        return PartialView("_PopupFormSuccess");
                       
                    }
                    else
                    {
                        ModelState.AddModelError("", "This email already exists!");
                        ViewBag.Heading = "Error";
                        return PartialView("_PopUpForm");
                    }


                }
                else
                {
                    ModelState.AddModelError("", "Please enter a valid e-mail address");
                    ViewBag.Heading = "Error";
                    return PartialView("_PopUpForm");
                }
            }
            catch (Exception)
            {
                ModelState.AddModelError("", "Please enter a valid e-mail address");
                ViewBag.Heading = "Error";
                return PartialView("_PopUpForm");
            }

        }
    }
}