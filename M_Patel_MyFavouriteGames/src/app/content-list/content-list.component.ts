import { Component, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { GamesService } from '../services/games.service';


@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})

  export class ContentListComponent {
    game: Content[] =[];
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

      constructor(private GameService: GamesService){
      }
  
      ngOnInit(){
        this.GameService.getGame().subscribe(content => this.game = content);
      }
  
  }