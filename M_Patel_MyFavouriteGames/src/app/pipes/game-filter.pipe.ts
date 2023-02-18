import { Pipe, PipeTransform } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Pipe({
  name: 'gameFilter'
})
export class GameFilterPipe implements PipeTransform {

  transform(game:Content[],inputValue?: string): Content[] {
    return game.filter(games => {
      return games.type === inputValue;
  });
}

}