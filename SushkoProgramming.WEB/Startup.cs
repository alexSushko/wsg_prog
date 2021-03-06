using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.SpaServices.AngularCli;
using Microsoft.AspNetCore.SpaServices.Webpack;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using SushkoProgramming.DAL.Database;

namespace SushkoProgramming.WEB {
    public class Startup {
        public Startup (IConfiguration configuration) {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices (IServiceCollection services) {
            services.AddMvc ();
            services.AddDbContext<Context> (options => options.UseSqlServer (Configuration.GetConnectionString ("DefaultConnection")));
            services.AddSpaStaticFiles (config => {
                config.RootPath = "ClientApp/WebApp/dist";
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure (IApplicationBuilder app, IHostingEnvironment env) {
            if (env.IsDevelopment ()) {
                app.UseDeveloperExceptionPage ();

            } else {
                app.UseExceptionHandler ("/Home/Error");
            }

            app.UseStaticFiles ();
            app.UseSpaStaticFiles ();
            app.UseMvc (routes => {
                routes.MapRoute (
                    name: "default",
                    template: "{controller}/{action=Index}/{id?}");

            });
            app.UseSpa (spa => {
                spa.Options.SourcePath = "ClientApp/WebApp";
                if (env.IsDevelopment ()) {
                    spa.UseAngularCliServer (npmScript: "start");
                }
            });
        }
    }
}