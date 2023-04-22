import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-create-content',
  templateUrl: './create-content.component.html', 
  styleUrls: ['./create-content.component.scss']
})

export class CreateContentComponent {
  game: any = {}
  @Output() createNewGame = new EventEmitter<any>();


  addGame(){
    this.createNewGame.emit(this.game);
    this.game = {};
  }
}