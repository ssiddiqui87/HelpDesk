using Dapper;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace HelpDesk.Models
{
    public class DAL
    {
        SqlConnection conn;

        public DAL(string connectionString)
        {
            conn = new SqlConnection(connectionString);
        }

        public IEnumerable<Ticket> GetAllTickets()
        {
            string queryString = "SELECT * FROM Tickets";
            IEnumerable<Ticket> Tickets = conn.Query<Ticket>(queryString);

            return Tickets;
        
        }
    }
}
