import { Component } from '@angular/core';
import { TicketDataService } from '../ticket-data.service';
import { FavoriteDataService } from '../favorite-data.service';
import { Favorite, JoinedItem } from '../interfaces/favorite';

@Component({
    selector: 'app-favorites',
    templateUrl: './favorites.component.html',
    styleUrls: ['./favorites.component.scss']
})
/** favorites component*/
export class FavoritesComponent {

  favorites: JoinedItem[];

  constructor(private ticketData: TicketDataService,
    private favoriteData: FavoriteDataService) { }
  
  ngOnInit() {
    //replace with name of get from service
    this.getFavorites();
  }
 
  delete(id: number) {
    //replace with name of delete cart item from service
    this.favoriteData.deleteFavorite(id).subscribe(
      (data: any) => {
        console.log(data);
        this.getFavorites();
      },
      error => console.error(error)
    );
  }

  getFavorites() {
    this.favoriteData.getFavorites().subscribe(
      (data: any) => {
        this.favoriteData = data;        
      },
      error => console.error(error)
    );
  }
}
