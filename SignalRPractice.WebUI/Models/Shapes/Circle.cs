using System;

namespace SignalRPractice.WebUI.Models
{
    public class Circle : IShape
    {
        public string IdName { get; set; }
        public string Width { get; set; }
        public string Height { get; set; }
        public string Background { get; set; }
        public string Border { get; set; }
        public string BorderRadius { get; set; }
        public string BorderLeft { get; set; }
        public string BorderRight { get; set; }
        public string BorderTop { get; set; }
        public string BorderBottom { get; set; }
        public string Transform { get; set; }
        public string TransformOrigin { get; set; }
        public string Content { get; set; }

        public Type ShapeType { get; set; }


        public Circle(string idName, string width, string height, string color)
        {
            IdName = idName;
            Width = width;
            Height = height;
            Background = color;

            // defaults
            Border = "2px solid black"; // HACK setting a default for the border for now
            BorderRadius = "50%";
            ShapeType = typeof(Circle);
        }

    }
}