using System.ComponentModel.DataAnnotations;

namespace PatientsDoc
{
    public class Patients
    {
        [Key]
        public int id_patients { get; set; }
        public string name { get; set; }
        public string surname { get; set; }
        public int id_doctor { get; set; }

    }
}
