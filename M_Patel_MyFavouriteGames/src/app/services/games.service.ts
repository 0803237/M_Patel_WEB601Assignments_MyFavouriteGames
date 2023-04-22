import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import { Content } from '../helper-files/content-interface';
import { game } from '../helper-files/contentDb';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GamesService {
  private httpOptions = {
    headers: new HttpHeaders({ "Game-Type": "application/json"})
  }

  constructor(private http: HttpClient, private messageService: MessageService) { }

  getGame(): Observable<Content[]>{
    this.messageService.add("Content array loaded!");
    return this.http.get<Content[]>('/api/games');
  }

  addGame(newGame: Content): Observable<Content>{
    this.messageService.add("New Games Added");
    return this.http.post<Content>('/api/games', newGame, this.httpOptions);
  }

  getGameById(id: number): Observable<any> {
    const content = game.find( g => g.id === id);
    this.messageService.add(`Content Item at id: ${id}`);
    return of(content);
  }
}