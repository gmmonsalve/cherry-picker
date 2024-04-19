using backendCherryPicker.Entities;
using Microsoft.EntityFrameworkCore;

namespace backendCherryPicker.Database
{
    public class CherryPickerDbContext : DbContext
    {
        public CherryPickerDbContext(DbContextOptions<CherryPickerDbContext> options) : base(options)
        {
        }

        public virtual DbSet<Date> Dates { get; set; }

    }
}
