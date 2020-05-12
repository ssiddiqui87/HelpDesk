using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using HelpDesk.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;

namespace HelpDesk.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TicketController : ControllerBase
    {

        IConfiguration ConfigRoot;
        DAL dal;

        public TicketController(IConfiguration config)
        {
            ConfigRoot = config;
            dal = new DAL(ConfigRoot.GetConnectionString("default"));
        }


        // All tickets
        // GET: api/Ticket
        [HttpGet]
        public IEnumerable<Ticket> Get()
        {

            IEnumerable<Ticket> result = dal.GetAllTickets();
            return result;
        }

        ////Ticket by ID
        //// GET: api/Ticket/5
        [HttpGet("{id}")]
        public Ticket GetTicket(int id)
        {
            Ticket result = dal.GetTicket(id);
            return result;
        }

        //Add new ticket
        // POST: api/Ticket
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        ////Edit/close ticket
        //// PUT: api/Ticket/5
        //[HttpPut("{id}")]
        //public void Put(int id, [FromBody] string value)
        //{
        //}

        ////Get categories
        //getCategories: Just returns the category names (DISTINCT)
        [HttpGet("categories")] // /api/menu/categories
        public IEnumerable<string> GetCategories()
        {

            IEnumerable<string> result = dal.GetCategories();
            return result;
        }
        ////Get tickets by category
        [HttpGet("categories/{cat}")] //  /api/menu/categories/entrees
        public IEnumerable<Ticket> GetByCategory(string cat)
        {

            IEnumerable<Ticket> result = dal.GetByCategory(cat);
            return result;
        }












        //// DELETE: api/ApiWithActions/5
        //[HttpDelete("{id}")]
        //public void Delete(int id)
        //{
        //}
    }
}
