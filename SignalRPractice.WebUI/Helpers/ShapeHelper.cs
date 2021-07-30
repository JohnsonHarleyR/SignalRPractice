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

        /// <summary>
        /// This will take an array as a json string and split it up into separate json strings that can be deserialized individually.
        /// </summary>
        /// <param name="jsonString"></param>
        /// <returns></returns>
        public static string[] SplitJsonString(string jsonString)
        {

            string[] splitStrings = jsonString.Split(new string[] { "},{" }, StringSplitOptions.None);

            for (int i = 0; i < splitStrings.Length; i++)
            {
                // What to do if there is only one item
                if (splitStrings.Length == 1)
                {
                    splitStrings[i] = splitStrings[i].Substring(1, splitStrings[i].Length - 2);
                }
                else // otherwise, take other factors into account for considering how to format the string
                {

                    if (i == 0) // if it's the first item, eliminate the '[' at the beginning and add '}' at the end
                    {
                        splitStrings[i] = splitStrings[i].Substring(1);
                        splitStrings[i] += "}";
                    }
                    else if (i == splitStrings.Length - 1) // if it's the last item, eliminate the ']' at the end and add '{' at the start
                    {
                        splitStrings[i] = splitStrings[i].Substring(0, splitStrings[i].Length - 1);
                        splitStrings[i] = "{" + splitStrings[i];
                    }
                    else // otherwise, add '{' at the start and '}' at the end
                    {
                        splitStrings[i] = "{" + splitStrings[i] + "}";
                    }

                }
            }

            return splitStrings;
        }

        //public static List<string> SplitJsonString(string jsonString)
        //{


        //    int position = jsonString.IndexOf("},{");

        //    List<string> splitStrings = new List<string>();

        //    return splitStrings;
        //}

    }
}