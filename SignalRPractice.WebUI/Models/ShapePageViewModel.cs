using System.Collections.Generic;

namespace SignalRPractice.WebUI.Models
{
    public class ShapePageViewModel
    {
        public List<IShape> Shapes { get; set; }

        public ShapePageViewModel()
        {
            Shapes = new List<IShape>();
        }
    }
}