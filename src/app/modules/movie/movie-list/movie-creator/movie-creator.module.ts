import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieCreatorComponent } from './movie-creator.component';
import { MovieCreatorRoutingModule } from './movie-creator-routing.module';
import { DiractiveModule } from 'src/app/shared/diractive/diractive.module';



@NgModule({
  declarations: [
    MovieCreatorComponent,
  ],
  imports: [
    CommonModule,
    MovieCreatorRoutingModule,
    DiractiveModule
  ]
})
export class MovieCreatorModule { }
