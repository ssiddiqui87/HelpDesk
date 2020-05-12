using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HelpDesk.Models
{
    public class JoinedItem
    {
        public int ID { get; set; }
        public int UserID { get; set; }
        public int TicketID { get; set; }
        public string Title { get; set; }
        public string Category { get; set; }
        public string TicketDetail { get; set; }
        public string OpenedBy { get; set; }
        public bool TicketStatus { get; set; }
        public string Resolution { get; set; }
        public string ResolvedBy { get; set; }
    }
}
