using backendCherryPicker.Entities;

namespace backendCherryPicker.Services
{
    public interface IDateService
    {
        Task<IEnumerable<Date>> GetAllDatesAsync();
    }
}
