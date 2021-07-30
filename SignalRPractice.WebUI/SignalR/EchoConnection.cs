using Microsoft.AspNet.SignalR;
using Newtonsoft.Json;
using System.Threading.Tasks;

namespace SignalRPractice.WebUI.SignalR
{
    public class EchoConnection : PersistentConnection
    {
        protected override Task OnConnected(IRequest request, string connectionId)
        {
            // notify connected clients
            return this.Connection.Broadcast("New Connection: " + connectionId, connectionId);
        }

        protected override Task OnDisconnected(IRequest request, string connectionId, bool stopCalled)
        {
            // notify connected clients
            return this.Connection.Broadcast("Goodbye, " + connectionId, connectionId);
        }

        protected override Task OnReceived(IRequest request, string connectionId, string data)
        {
            var shape = JsonConvert.DeserializeObject(data);
            return Connection.Broadcast(data, connectionId);
        }
    }
}