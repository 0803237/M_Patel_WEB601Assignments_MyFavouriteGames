import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import { Content } from '../helper-files/content-interface';
import { game } from '../helper-files/contentDb';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  constructor(private messageService: MessageService) { }

  getGame(): Observable<Content[]>{
    this.messageService.add("Content array loaded!");
    return of(game);
  }

  getGameById(id: number): Observable<any> {
    const content = game.find( g => g.id === id);
    this.messageService.add(`Content Item at id: ${id}`);
    return of(content);
  }
}