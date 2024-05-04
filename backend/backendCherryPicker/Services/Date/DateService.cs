using backendCherryPicker.Entities;
using backendCherryPicker.Repositories;

namespace backendCherryPicker.Services
{
    public class DateService : IDateService
    {
        private readonly IDateRepository _dateRepository;
        public DateService(IDateRepository dateRepository)
        {
            _dateRepository = dateRepository;
        }

        public async Task<IEnumerable<Date>> GetAllDatesAsync()
        {
            try
            {
                return await _dateRepository.GetAllDatesAsync();
            }
            catch (Exception ex)
            {
                throw new Exception("Error trying to get all dates in service", ex);
            }
        }
    }
}
