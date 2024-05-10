using backendCherryPicker.Entities;
using backendCherryPicker.Services;
using Microsoft.AspNetCore.Mvc;

namespace backendCherryPicker.Controllers
{
    [ApiController]
    [Route("/date")]
    public class DateController(IDateService dateService) : ControllerBase
    {
        private readonly IDateService _dateService = dateService;

        [HttpGet(Name = "GetAllDates")]
        public async Task<IEnumerable<Date>> GetAllDates() 
        {
            return await _dateService.GetAllDatesAsync();
        }

        [HttpPost]
        public async Task<IActionResult> CreateDate([FromBody] Date date)
        {
            await _dateService.CreateDateAsync(date);
            return Ok();
        }

    }
}
