using Microsoft.AspNet.SignalR;
using System.Threading.Tasks;

namespace SignalRPractice.WebUI.SignalR
{
    public class EchoConnection : PersistentConnection
    {
        protected override Task OnConnected(IRequest request, string connectionId)
        {
            return Connection.Send(connectionId, "Welcome!");
        }

        protected override Task OnDisconnected(IRequest request, string connectionId, bool stopCalled)
        {
            return Connection.Send(connectionId, "Goodbye");
        }

        protected override Task OnReceived(IRequest request, string connectionId, string data)
        {
            return Connection.Broadcast(data);
        }
    }
}