import { Component } from '@angular/core';
import { Content } from "../helper-files/content-interface";

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent {
  game: Content[];
  defaultImage: string = "/assets/default.jpg";
  titleSearch:string = '';
  checkForTitleInList: boolean | null = null;
  errorMsg: string = '';

  logIdTitle(card: any){
    console.log(`${card.id}, ${card.title}`);
  }
  SearchByTitle(){
    console.log(this.titleSearch);
    this.checkForTitleInList = this.game.some(content => content.title === this.titleSearch);
  }

  addGame(addedGame: any){
    const promise = new Promise((resolve, reject) => {
      this.game.push(addedGame);
      this.game = [...this.game]
      resolve(addedGame.title);
    });

    promise.then(title => {
      console.log(`Game added successfully, ${title}`);
      this.errorMsg = '';
    }).catch(error => {
      this.errorMsg = "Information not added";
    });
  }

  constructor(){
        this.game = [{
          id: 1,
          title: 'Call of Duty',
          description: "Best game till now which focus on World War 2 settings",
          publisher : "Activision",
          gametype: "Shooter Video Game",
          ratings: 4,
          imageURL: '/assets/CallOfDuty.jpg',   
        },
    
        {
          id: 2,
          title: 'Grand Theft Auto: Vice City',
          description: "In this game the player controls criminal Tommy Vercetti and completes missions",
          publisher : "Rockstar Games",
          gametype: "action-adventure Game",
          ratings: 5,
          imageURL: '/assets/ViceCity.jpg',   
        },
    
        {
          id: 3,
          title: 'Valorant',
          description: "Valorant is a team-based game where they are placed either in attacking or defending team.",
          publisher : "Riot Games",
          gametype: "Shooter Video Game",
          ratings: 4,
          imageURL: '/assets/Valorant.jpg',   
        },
    
        {
          id: 4,
          title: 'Splitgate',
          description: "Splitgate s a fast-paced, arena-based shooter where you and everyone else can create portals to flank, reposition, and zip around the map",
          publisher : "1047 Games",
          gametype: "",
          ratings: 4,
          imageURL: '/assets/splitgate.jpg',   
        },
    
        {
          id: 5,
          title: 'Call of Duty: Warzone',
          description: "Call of Duty: Warzone is, by and large, a mode designed for the 2019 release of Call of Duty: Modern Warfare. ",
          publisher : "Activision",
          gametype: "Shooter Video game",
          ratings: 3.2,
          imageURL: '/assets/WarZone.jpg',   
        },
    
        {
          id: 6,
          title: 'Need for Speed (NFS)',
          description: "NFS series generally centers around illegal street racing and tasks players to complete various types of races while evading the local law enforcement in police pursuits.",
          publisher : "Electronic Arts",
          gametype: "racing game",
          ratings: 4.1,
          imageURL: '/assets/NFS.jpg',   
        },
      
        {
          id: 7,
          title: 'Desktop Dungeons',
          description: "In the game, players navigate a dungeon filled with monsters before battling a final dungeon boss.",
          publisher : "QCF Design",
          gametype: "Puzzle video-game",
          ratings: 4
          // imageURL: '/assets/Desktop.jpg',   
        },
      
        {
          id: 8,
          title: 'Samorost',
          description: "The goal of the Samorost games is to solve a series of puzzles and brain teasers",
          publisher : "Amanita Design",
          gametype: "",
          ratings: 4.2,
          imageURL: '/assets/Samorost.jpg',   
        }
        ];
    }

}
