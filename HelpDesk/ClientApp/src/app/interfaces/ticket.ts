export interface Ticket {
  ticketid: number;
  userid: number;
  title: string;
  category: string;
  ticketdetail: string;
  openedby: string;
  ticketstatus: boolean;
  resolution: string;
  resolvedby: string;
}
