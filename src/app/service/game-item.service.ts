import { Injectable } from '@angular/core';
import { gameItem } from '../shared/interface/index.interface';
import { gameItemModel } from '../shared/model/index.model';

@Injectable({
  providedIn: 'root'
})
export class GameItemService {
  gameItem!: gameItem;
  constructor() { }
  getItem(){
    return this.gameItem = gameItemModel
  }
}

