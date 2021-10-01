import { Component, OnInit } from '@angular/core';
import { MovieCreatorService } from 'src/app/service/index.service';
import { MovieCreatorItem } from 'src/app/shared/interface/index.interface';

@Component({
  selector: 'app-movie-creator',
  templateUrl: './movie-creator.component.html',
  styleUrls: ['./movie-creator.component.css']
})
export class MovieCreatorComponent implements OnInit {
  creatorItem?:MovieCreatorItem[];
  constructor(private creator:MovieCreatorService) { }

  ngOnInit() {
      this.creatorItem = this.creator.getAllCreator()
  }

}
