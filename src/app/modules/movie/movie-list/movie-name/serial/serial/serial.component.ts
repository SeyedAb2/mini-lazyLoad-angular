import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from 'src/app/service/index.service';
import { movieOption } from 'src/app/shared/model/index.model';

@Component({
  selector: 'app-serial',
  templateUrl: './serial.component.html',
  styleUrls: ['./serial.component.css']
})
export class SerialComponent implements OnInit {
  serial?:movieOption[];
  constructor(private service: MovieService,private router:Router) { }

  ngOnInit(): void {
    this.serial = this.service.categoryMovie(this.router.url.split('/').slice(3)[0])
    console.log(this.serial)
  }

}
