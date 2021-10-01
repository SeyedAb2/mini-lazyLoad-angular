import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';
import { MovieNameComponent } from './movie-name.component';
import { MovieNameRoutingModule } from './movie-name-routing.module';
import { SerialComponent } from './serial/serial/serial.component';
import { AnimationComponent } from './animation/animation/animation.component';




@NgModule({
  declarations: [
    MovieNameComponent,
    SerialComponent,
    AnimationComponent,
  ],
  imports: [
    CommonModule,
    MovieNameRoutingModule
  ]
})
export class MovieNameModule { }
