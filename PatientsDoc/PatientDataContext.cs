using Microsoft.EntityFrameworkCore;

namespace PatientsDoc
{
    public class PatientDataContext:DbContext
    {
        public PatientDataContext(DbContextOptions<PatientDataContext> options) : base(options)
        {
        }
        public DbSet<Patients> Patients { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Patients>().ToTable("patients");
        }
    }
}
