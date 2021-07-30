using SignalRPractice.WebUI.Models;
using System;

namespace SignalRPractice.WebUI.Helpers
{
    public static class ShapeHelper
    {

        public static Type GetShapeType(string jsonString)
        {
            // define first part of string
            string stringStart = "\"ShapeType\":\"";
            // create array with different shape types
            Type[] shapeTypes = new Type[] { typeof(Circle) };

            // loop through to find correct type
            for (int i = 0; i < shapeTypes.Length; i++)
            {
                string searchString = $"{stringStart}{shapeTypes[i].ToString()}";
                if (jsonString.Contains(searchString))
                {
                    return shapeTypes[i];
                }
            }
            return null;
        }

    }
}