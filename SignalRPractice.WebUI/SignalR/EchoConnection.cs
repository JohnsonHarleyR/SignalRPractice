using Microsoft.AspNet.SignalR;
using Newtonsoft.Json;
using SignalRPractice.WebUI.Helpers;
using SignalRPractice.WebUI.Models;
using System;
using System.Collections.Generic;
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

            string[] objectStrings = ShapeHelper.SplitJsonString(data);

            // loop through strings to deserialize them
            List<IShape> shapes = new List<IShape>();
            for (int i = 0; i < objectStrings.Length; i++)
            {
                Type shapeType = ShapeHelper.GetShapeType(objectStrings[i]);

                if (shapeType != null)
                {
                    IShape shape = (IShape)JsonConvert.DeserializeObject(objectStrings[i], shapeType);
                    shapes.Add(shape);
                }
            }

            return Connection.Broadcast(shapes, connectionId);

        }
    }
}