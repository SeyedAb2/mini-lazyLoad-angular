import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieCreatorComponent } from './movie-creator.component';


const routes: Routes = [
  {path:'', component: MovieCreatorComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovieCreatorRoutingModule { }
