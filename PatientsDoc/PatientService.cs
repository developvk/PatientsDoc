using System.Text.Json;

namespace PatientsDoc
{
    public class PatientService
    {
        private readonly HttpClient _httpClient = new HttpClient();

        public object Patients { get; internal set; }

        public async Task<Patients> GetData()
        {
            var data = _httpClient.GetStreamAsync("https://jsonplaceholder.typicode.com/todos/1");
            var res = await JsonSerializer.DeserializeAsync<Patients>(await data);
            return res;
        }

        internal Task SaveChangesAsync()
        {
            throw new NotImplementedException();
        }
    }
}
