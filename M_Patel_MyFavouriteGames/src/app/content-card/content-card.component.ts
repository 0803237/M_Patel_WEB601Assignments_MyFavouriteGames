import { Component } from '@angular/core';
import { Content} from '../helper-files/content-interface';
import { ContentLists } from '../helper-files/content-list';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent {
  title = 'Moksha Patel';

  Game1: Content;
  Game2: Content;
  Game3: Content;
  GameListArray = new ContentLists();

  constructor() {
  
    this.Game1 = {
      id: 0,
      title: 'Call of Duty',
      description: "Best game till now which focus on World War 2 settings",
      publisher : "Activision",
      type: "Shooter Video Game",
      ratings: 4,
      imageURL: '/assets/CallOfDuty.jpg',   
    };

    this.Game2 = {
      id: 1,
      title: 'Grand Theft Auto: Vice City',
      description: "In this game the player controls criminal Tommy Vercetti and completes missions",
      publisher : "Rockstar Games",
      type: "action-adventure Game",
      ratings: 5,
      imageURL: '/assets/ViceCity.jpg',   
    };

    this.Game3 = {
      id: 2,
      title: 'Valorant',
      description: "Valorant is a team-based game where they are placed either in attacking or defending team.",
      publisher : "Riot Games",
      type: "first-person tactical hero shooter",
      ratings: 4,
      imageURL: '/assets/Valorant.jpg',   
    };
 

    this.GameListArray.addItem(this.Game1); 
    this.GameListArray.addItem(this.Game2); 
    this.GameListArray.addItem(this.Game3); 


  }
}
