using backendCherryPicker.Entities;
using backendCherryPicker.Services;
using Microsoft.AspNetCore.Mvc;

namespace backendCherryPicker.Controllers
{
    [ApiController]
    [Route("dates")]
    public class DateController : ControllerBase
    {
        private readonly IDateService _dateService;

        public DateController(IDateService dateService)
        {
            _dateService = dateService;
        }

        [HttpGet(Name = "GetAllDates")]
        public async Task<IEnumerable<Date>> GetAllDates() 
        {
            return await _dateService.GetAllDatesAsync();
        }


    }
}
