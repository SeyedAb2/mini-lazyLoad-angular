import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameModule } from './modules/game/game.module';
import { MovieModule } from './modules/movie/movie.module';

const routes: Routes = [
  {path: '', redirectTo: 'game', pathMatch: 'full'},
  {path: 'game', loadChildren : () => import('./modules/game/game.module').then(m => m.GameModule)},
  {path: 'movie', loadChildren : () => import('./modules/movie/movie.module').then(m => m.MovieModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
