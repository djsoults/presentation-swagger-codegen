using System;
using AutoFixture;
using Microsoft.AspNetCore.Mvc;
using SwaggerCodegenAPI.Models;

namespace SwaggerCodegenAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PresentationController : ControllerBase
    {
        private readonly IFixture _fixture;

        public PresentationController(IFixture fixture)
        {
            _fixture = fixture;
        }
        
        [HttpGet]
        public ActionResult<Presentation> GetPresentation()
        {
            return new Presentation()
            {
                PresenterName = "DJ Soults",
                PresentationTitle = "Automating TypeScript Scaffolding with Swagger Codegen",
                StartTime = new DateTime(2018,11,1,18,0,0,DateTimeKind.Local),
                CurrentTime = DateTime.Now
            };
        }
    }
}