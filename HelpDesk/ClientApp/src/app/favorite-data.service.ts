import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Favorite, JoinedItem } from './interfaces/favorite';

@Injectable()
export class FavoriteDataService {
  userid: number;
    constructor(private http: HttpClient) {
      this.userID = Math.floor(Math.random() * 1000000) + 1;
    }
  getFavorites() {
    return this.http.get<JoinedItem[]>('/api/cart/' + this.userID);
  }
  deleteFavorite(ticketid: number) {
    return this.http.delete('/api/favorite/' + ticketid);
  }

  postFavorite(id: number) {
    let item: Favorite = {
      ticketid: id,
      userid: this.userid
    };

    return this.http.post<Favorite>('/api/favorite', item);
  }
}