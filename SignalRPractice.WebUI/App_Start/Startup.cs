using Owin;

namespace SignalRPractice.WebUI.App_Start
{
    public class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            SignalRConfig.Setup(app);
        }
    }
}
