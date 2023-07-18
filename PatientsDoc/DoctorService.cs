using System.Text.Json;

namespace PatientsDoc
{
    public class DoctorService
    {
        private readonly HttpClient _httpClient = new HttpClient();
        public async Task<Doctors> GetData()
        {
            var data = _httpClient.GetStreamAsync("https://jsonplaceholder.typicode.com/todos/1");
            var res = await JsonSerializer.DeserializeAsync<Doctors>(await data);
            return res;
        } 
    }
}
