import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-modify-content',
  templateUrl: './modify-content.component.html',
  styleUrls: ['./modify-content.component.scss']
})
export class ModifyContentComponent {
  game: any = {}
  @Output() createNewGame = new EventEmitter<any>();


  addGame(){
    this.createNewGame.emit(this.game);
    this.game = {};
  }
}
