namespace SignalRPractice.WebUI.Models
{
    public interface IShape
    {
        string IdName { get; set; }

        string Width { get; set; }
        string Height { get; set; }

        string Background { get; set; }
        string Border { get; set; }

        string BorderRadius { get; set; }

        string BorderLeft { get; set; }
        string BorderRight { get; set; }
        string BorderTop { get; set; }
        string BorderBottom { get; set; }

        string Transform { get; set; }
        string TransformOrigin { get; set; }

        string Content { get; set; }
    }
}
