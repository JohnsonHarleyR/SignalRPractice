using Microsoft.Owin;
using Owin;
using SignalRPractice.WebUI.SignalR;

[assembly: OwinStartup(typeof(SignalRPractice.WebUI.Startup))]

namespace SignalRPractice.WebUI
{
    public class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            app.MapSignalR<EchoConnection>("/echo");
            app.MapSignalR<VisitorsCountConnection>("/visitorsCount");
        }
    }
}
