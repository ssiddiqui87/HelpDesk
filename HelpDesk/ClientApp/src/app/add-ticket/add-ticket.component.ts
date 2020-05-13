import { Component, OnInit } from '@angular/core';
import { Ticket } from '../interfaces/ticket';
import { TicketDataService } from '../ticket-data.service';

@Component({
  selector: 'app-add-ticket',
  templateUrl: './add-ticket.component.html',
  styleUrls: ['./add-ticket.component.css']
})
export class AddTicketComponent implements OnInit {

  title: string;
  category: string;
  details: string;
  openedBy: string;

  constructor(private ticketData: TicketDataService) { }

  ngOnInit() {
  }


 addTicket() {
   this.ticketData.addNewTicket({
     ticketid: 0,
     userid: this.ticketData.userID,
     title: this.title,
     category: this.category,
     ticketdetail: this.details,
     openedby: this.openedBy,
     ticketstatus: false,
     resolution: null,
     resolvedby: null
   }).subscribe(
     (data: object) => console.log(data), error => console.error(error));
  }


}
