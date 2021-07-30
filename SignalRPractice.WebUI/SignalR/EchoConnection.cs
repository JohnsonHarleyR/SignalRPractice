using Microsoft.AspNet.SignalR;
using Newtonsoft.Json;
using SignalRPractice.WebUI.Helpers;
using SignalRPractice.WebUI.Models;
using System;
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

            Type shapeType = ShapeHelper.GetShapeType(data);

            if (shapeType != null)
            {
                IShape shape = (IShape)JsonConvert.DeserializeObject(data, shapeType);
                return Connection.Broadcast(shape, connectionId);
            }
            else
            {
                var shape = JsonConvert.DeserializeObject(data);
                return Connection.Broadcast(shape, connectionId);
            }
        }
    }
}