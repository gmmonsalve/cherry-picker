using backendCherryPicker.Database;
using backendCherryPicker.Entities;
using Microsoft.Data.SqlClient;
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

        public async Task CreateDateAsync(Date date)
        {
            try
            {
                await _context.Dates.AddAsync(date); 
                await _context.SaveChangesAsync();
            }
            catch (Exception ex)
            {
                throw new Exception("Error trying to get all dates", ex);
            }
        }
    }
}
