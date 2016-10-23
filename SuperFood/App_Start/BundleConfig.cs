using System.Web.Optimization;

namespace SuperFood
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.UseCdn = true;

            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                        "~/Scripts/jquery.validate*"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at http://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/Scripts/bootstrap.js",
                      "~/Scripts/respond.js"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/bootstrap.css",
                       "~/Content/pruducts.css",
                      "~/Content/site.css"));

            //angular dependencies must be added prior to the modules
            bundles.Add(new ScriptBundle("~/bundles/Javascript/SuperFoodAppDependencies")
                .Include("~/Scripts/angular.min.js")
                .Include("~/Scripts/angular-route.js")
                .Include("~/Scripts/angular-ui.js")
                .Include("~/Scripts/angular-sanitize.js")     //use 1.2.8 version of sanitize to avoid spurious console c.scope is not a function error
                .Include("~/Scripts/angular-animate.js")
                );

            //angular app
            bundles.Add(new ScriptBundle("~/bundles/Javascript/SuperFoodApp")
                .Include("~/Typescript/App/app.js"));

            //administration module
            bundles.Add(new ScriptBundle("~/bundles/Javascript/SuperFoodAdministrationApp")
                 .IncludeDirectory("~/Typescript/Administration/Services", "*.js")
                 .IncludeDirectory("~/Typescript/Administration/Controllers", "*.js")
                 .IncludeDirectory("~/Typescript/Administration/Models", "*.js")
                 .Include("~/Typescript/Administration/administrationApp.js")
                 );

            //home dashboard module
            bundles.Add(new ScriptBundle("~/bundles/Javascript/SuperFoodHomeDashboardApp")
                 .IncludeDirectory("~/Typescript/HomeDashboard/Services", "*.js")
                 .IncludeDirectory("~/Typescript/HomeDashboard/Controllers", "*.js")
                 .IncludeDirectory("~/Typescript/HomeDashboard/Models", "*.js")
                 .Include("~/Typescript/HomeDashboard/homeDashboardApp.js")
                 );
        }
    }
}
