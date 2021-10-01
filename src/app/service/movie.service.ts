import { Injectable } from '@angular/core';
import { movieItem } from '../shared/interface/index.interface';
import { movie, movieOption } from '../shared/model/index.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  movieModel = new movie();
  allMovie: movieOption[] = [];
  catMovie: movieOption[] = [];
  catName:string ='';
  constructor() {
    this.allMovie = this.movieModel.movie
   }
  selectAllMovie(){
    return this.allMovie = this.movieModel.movie

  }
  getCatName(cat:string){
    this.catName = cat
  }
  categoryMovie(name:string):movieOption[]{

    if(this.catName == name){
      if(this.allMovie.find(x => x.category === name)?.category){
        this.catMovie = this.allMovie.filter(x => x.category === name)
        console.log(this.catMovie)
     }
    }
    return this.catMovie
  }

}
