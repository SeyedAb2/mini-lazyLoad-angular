import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieListComponent } from './movie-list/movie-list.component';


const routes: Routes = [
  //
  {path:'', component: MovieListComponent, children: [
    {path: '', redirectTo: 'name', pathMatch: 'full'},
    {path: 'name', loadChildren : () => import('./movie-list/movie-name/movie-name.module').then(m => m.MovieNameModule)},
    {path: 'creator', loadChildren : () => import('./movie-list/movie-creator/movie-creator.module').then(m => m.MovieCreatorModule)},
  ]},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovieRoutingModule { }
