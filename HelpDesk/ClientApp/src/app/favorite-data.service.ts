import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Favorite, JoinedItem } from './interfaces/favorite';

@Injectable()
export class FavoriteDataService {
  userID: number;
  constructor(private http: HttpClient) {
    
   
  }
  getFavorites() {
    return this.http.get<JoinedItem[]>('/api/favorites/');
  }
  deleteFavorite(ticketid: number) {
    return this.http.delete('/api/favorites/' + ticketid);
  }

  postFavorite(id: number) {
    let item: Favorite = {
      id: 0,
      ticketID: id,
      userID: this.userID
    };

    return this.http.post<Favorite>('/api/favorites', item);
  }
}
