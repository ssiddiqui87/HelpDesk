export interface Favorite {
  id: number;
  userid: number;
  ticketid: number;
}

export interface JoinedItem {
  id: number;
  userid: number;
  ticketid: number;
  title: string;
  category: string;
  ticketdetail: string;
  openedby: string;
  ticketstatus: boolean;
  resolution: string;
  resolvedby: string;
}
