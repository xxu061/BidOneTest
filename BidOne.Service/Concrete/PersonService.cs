using BidOne.Domain;
using BidOne.Repo.Interface;
using BidOne.Service.Interface;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace BidOne.Service.Concrete
{
    public class PersonService : IPersonService
    {
        private readonly IPersonRepo _repo;
        public PersonService(IPersonRepo repo)
        {
            _repo = repo;
        }

        public async Task Save(Person person)
        {
            try
            {
                if (person.Id == null)
                {
                    person.Id = Guid.NewGuid();
                }

                await _repo.Save(person);
            }
            catch (Exception e)
            {
                throw e;
            }
        }
    }
}
