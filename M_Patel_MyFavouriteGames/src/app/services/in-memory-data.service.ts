import { Injectable } from '@angular/core';
// import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Content } from '../helper-files/content-interface';
import { game } from '../helper-files/contentDb';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDataService {

  constructor() { }
  createDb(){
    const games : Content[] = game;
    return {games}
  }
}
