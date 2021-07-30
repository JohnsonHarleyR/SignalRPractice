using Owin;
using SignalRPractice.WebUI.SignalR;

namespace SignalRPractice.WebUI.App_Start
{
    public class SignalRConfig
    {
        public static void Setup(IAppBuilder app)
        {
            app.MapSignalR<EchoConnection>("/SignalR/echo");
            app.MapSignalR<VisitorsCountConnection>("/SignalR/visitorsCount");
        }
    }
}
