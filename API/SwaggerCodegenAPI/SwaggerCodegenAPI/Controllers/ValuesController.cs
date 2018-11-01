using System;
using AutoFixture;
using Microsoft.AspNetCore.Mvc;
using SwaggerCodegenAPI.Models;

namespace SwaggerCodegenAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ValuesController : ControllerBase
    {
        private readonly IFixture _fixture;

        public ValuesController(IFixture fixture)
        {
            _fixture = fixture;
        }

        [HttpGet("Int")]
        public ActionResult<int> GetInt()
        {
            return _fixture.Create<int>();
        }
        
        [HttpGet("Guid")]
        public ActionResult<Guid> GetGuid()
        {
            return Guid.NewGuid();
        }
        
        [HttpGet("Date")]
        public ActionResult<DateTime> GetDateTime()
        {
            return DateTime.Now;
        }
        
        [HttpPost("Date")]
        public ActionResult<DateTime> BuildDateTime(DateBuilder model)
        {
            return new DateTime(model.Year, model.Month, model.Day);
        }
    }
}