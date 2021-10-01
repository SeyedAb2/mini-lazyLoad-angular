import { Injectable } from '@angular/core';
import { MovieCreatorItem } from '../shared/interface/index.interface';
import { movieCreatorModel } from '../shared/model/index.model';

@Injectable({
  providedIn: 'root'
})
export class MovieCreatorService {
  allCreator?:MovieCreatorItem[];
  constructor() { }
  getAllCreator(){
     return this.allCreator = movieCreatorModel;
  }
}
