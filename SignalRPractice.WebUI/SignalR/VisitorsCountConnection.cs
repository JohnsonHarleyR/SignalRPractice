using Microsoft.AspNet.SignalR;
using System.Diagnostics;
using System.Threading;
using System.Threading.Tasks;

namespace SignalRPractice.WebUI.SignalR
{
    public class VisitorsCountConnection : PersistentConnection
    {

        private static int connections = 0;

        protected override Task OnConnected(IRequest request, string connectionId)
        {
            Interlocked.Increment(ref connections);
            Debug.WriteLine("Visitors: " + connections);
            return base.OnConnected(request, connectionId);
        }

        protected override Task OnDisconnected(IRequest request, string connectionId, bool stopCalled)
        {
            Interlocked.Decrement(ref connections);
            Debug.WriteLine("Visitors: " + connections);
            return base.OnDisconnected(request, connectionId, stopCalled);
        }

    }
}