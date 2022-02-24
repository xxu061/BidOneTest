using System;
using System.IO;
using System.Text.Json;
using System.Threading.Tasks;
using BidOne.Domain;
using BidOne.Repo.Interface;
using Microsoft.Extensions.Configuration;

namespace BidOne.Repo.Concrete
{
    public class PersonFileSystemRepo : IPersonRepo
    {
        private readonly IConfiguration _configuration;

        public PersonFileSystemRepo(IConfiguration config)
        {
            _configuration = config ?? throw new ArgumentNullException();
        }
        public async Task Save(Person person)
        {
            try
            {
                if(ValidatePayload(person))
                {
                    await using FileStream createStream = File.Create(string.Format("{0}/{1}.json", _configuration.GetSection("AppSettings")["FileLocation"], person.Id.ToString()));
                    await JsonSerializer.SerializeAsync(createStream, person);
                }
                else
                {
                    throw new NullReferenceException("Invalid payload");
                }
            }
            catch (Exception e)
            {
                throw e;
            }
        }

        private bool ValidatePayload(Person person)
        {
            return person != null && person.Id != null;
        }
    }
}
