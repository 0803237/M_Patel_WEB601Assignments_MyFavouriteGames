import { Component, Input } from '@angular/core';
import { Content} from '../helper-files/content-interface';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent {
  title = 'Moksha Patel';
  @Input() game?: Content;

  printDataOnConsole()
  {
    console.log(`Content's id is "${this.game?.id}" and Title of the game is "${this.game?.title}"`);
  }

  constructor() {
  
    
  }
}
