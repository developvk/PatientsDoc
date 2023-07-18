using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace PatientsDoc.Controllers
{

        [Route("api/[controller]/")]
        [ApiController]
        public class PatientController : ControllerBase
        {
        public readonly PatientDataContext _context;
        public readonly DataContext _dataContext;
        public PatientController(PatientDataContext context, DataContext dataContext)
            {
                _context = context;
            _dataContext = dataContext;
        }

        [HttpGet]
        [Route("List")]
        public async Task<ActionResult<IEnumerable<Patients>>> Get()
        {
            return await _context.Patients.ToListAsync();
        }

        [HttpPost]
        //public async void Post(Product product)
        [Route("CreateRecord")]
        public async Task<ActionResult<Patients>> POST(Patients patient)
        {
            _context.Patients.Add(patient);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(Get), new { id = patient.id_patients }, patient);
        }
        [HttpGet]
        [Route("ListByDoctorId/")]
        public async Task<ActionResult<IEnumerable<Patients>>> GetById(int doctor_id)
        {
            using (_context) {
                return await _context.Patients.Where(s => s.id_doctor == doctor_id)
                       .ToListAsync<Patients>();
            }
          
        }
    }
}

