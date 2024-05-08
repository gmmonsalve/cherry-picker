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

        public async Task CreateDateAsync(Date date)
        {
            try
            {
                await _dateRepository.CreateDateAsync(date);
            }
            catch (Exception ex)
            {
                throw new Exception("Error trying trying to create a Date", ex);
            }
        }
    }
}
