using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace PatientsDoc.Controllers
{
    [Route("api/[controller]/")]
    [ApiController]
    public class DoctorController : ControllerBase
    {
        public readonly DataContext _context;    
        public DoctorController(DataContext context)
        {
            _context = context;
        }
        [HttpGet]
        [Route("List")]
        public async Task<ActionResult<IEnumerable<Doctors>>> Get()
        {
            return await _context.Doctors.ToListAsync();
        }

    }
}
