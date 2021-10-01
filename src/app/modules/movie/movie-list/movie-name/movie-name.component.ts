import { AfterContentChecked, Component, DoCheck, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { MovieService } from 'src/app/service/index.service';

@Component({
  selector: 'app-movie-name',
  templateUrl: './movie-name.component.html',
  styleUrls: ['./movie-name.component.css']
})
export class MovieNameComponent implements OnInit,AfterContentChecked {
  childPath:string = '';
  constructor(private router:Router,
    private movieService: MovieService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {

  }
  ngAfterContentChecked(): void {
    this.route.children[0].url.subscribe((x) => {
      this.childPath = x[0].path;
      this.catName(this.childPath)
    })

  }
  catName(catName:string){
    if(catName == this.childPath){
      this.movieService.getCatName(this.childPath)
      console.log(catName)
    }


  }

}
