using System;

namespace SwaggerCodegenAPI.Models
{
    public class Presentation
    {
        public string PresenterName { get; set; }

        public string PresentationTitle { get; set; }

        public DateTime StartTime { get; set; }

        public DateTime CurrentTime { get; set; }
    }
}