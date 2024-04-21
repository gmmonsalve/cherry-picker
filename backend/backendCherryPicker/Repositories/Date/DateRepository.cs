using backendCherryPicker.Database;
using backendCherryPicker.Entities;
using Microsoft.EntityFrameworkCore;

namespace backendCherryPicker.Repositories
{
    public class DateRepository : IDateRepository
    {
        private readonly CherryPickerDbContext _context;
        public DateRepository(CherryPickerDbContext context) 
        {
            _context = context;
        }

        public async Task<IEnumerable<Date>> GetAllDatesAsync()
        {
            try
            {
                return await _context.Dates.ToListAsync();
            }
            catch (Exception ex)
            {
                throw new Exception("Error trying to get all dates", ex);
            }
        }
    }
}
