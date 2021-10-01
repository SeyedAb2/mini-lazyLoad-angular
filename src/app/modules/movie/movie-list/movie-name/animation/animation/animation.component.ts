import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieService } from 'src/app/service/index.service';
import { movieOption } from 'src/app/shared/model/index.model';

@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.css']
})
export class AnimationComponent implements OnInit {

  animation?:movieOption[];
  constructor(private service: MovieService,private router:Router) { }

  ngOnInit(): void {
    this.animation = this.service.categoryMovie(this.router.url.split('/').slice(3)[0])
  }

}
