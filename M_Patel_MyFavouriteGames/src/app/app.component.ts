import { Component, OnInit } from '@angular/core';
import { GamesService } from './services/games.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'M_Patel_MyFavouriteGames';
  defaultImage: string = 'assets/default.jpg';
  firstGame: any = {}

  logIdTitle(card: any){
    console.log(`${card.id}, ${card.title}`);
  }

  constructor(private GameService: GamesService){}

  ngOnInit(){
    this.GameService.getGameById(3).subscribe(game => this.firstGame = game);
  }
}
