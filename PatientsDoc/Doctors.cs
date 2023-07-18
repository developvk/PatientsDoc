using System.ComponentModel.DataAnnotations;

namespace PatientsDoc
{
    public class Doctors

    {
        [Key]
        public int id_doctors { get; set; }
        public string name { get; set; }
        public string surname { get; set; }
    }
}
