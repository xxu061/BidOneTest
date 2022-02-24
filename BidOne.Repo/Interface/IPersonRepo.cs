using BidOne.Domain;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace BidOne.Repo.Interface
{
    public interface IPersonRepo
    {
        Task Save(Person person);
    }
}
