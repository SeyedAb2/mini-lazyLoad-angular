import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimationComponent } from './animation/animation/animation.component';
import { MovieNameComponent } from './movie-name.component';
import { SerialComponent } from './serial/serial/serial.component';


const routes: Routes = [
  {path:'' ,component: MovieNameComponent, children:[
    {path:'', redirectTo: 'serial', pathMatch:'full'},
    {path:'serial',component: SerialComponent},
    {path:'animation',component: AnimationComponent},
  ]}



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovieNameRoutingModule { }
