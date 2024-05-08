using backendCherryPicker.Entities;

namespace backendCherryPicker.Repositories
{
    public interface IDateRepository
    {
        Task<IEnumerable<Date>> GetAllDatesAsync();
        Task CreateDateAsync(Date date);
    }
}
