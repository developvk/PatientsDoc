using Microsoft.EntityFrameworkCore;

namespace PatientsDoc
{
    public class DataContext:DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {
        }
        public DbSet<Doctors> Doctors { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Doctors>().ToTable("doctors");
        }
    }
}
