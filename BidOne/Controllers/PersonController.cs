using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BidOne.Domain;
using BidOne.Service.Interface;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace BidOne.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class PersonController : ControllerBase
    {
        private readonly ILogger<PersonController> _logger;
        private readonly IPersonService _personService;

        public PersonController(ILogger<PersonController> logger,
                                IPersonService personService)
        {
            _logger = logger;
            _personService = personService;
        }

        [HttpPost]
        public async Task<IActionResult> Save(Person person)
        {
            try
            {
                if(person == null || string.IsNullOrEmpty(person.FirstName) || string.IsNullOrEmpty(person.LastName))
                {
                    return BadRequest();
                }

                await _personService.Save(person);

                return Ok();
            }
            catch(ArgumentNullException e)
            {
                return BadRequest();
            }
            catch(Exception e)
            {
                _logger.LogError(e, "Error occurred.");
                return StatusCode(500);
            }
        }
    }
}
