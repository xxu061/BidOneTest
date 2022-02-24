using BidOne.Domain;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace BidOne.Service.Interface
{
    public interface IPersonService
    {
        Task Save(Person person);
    }
}
