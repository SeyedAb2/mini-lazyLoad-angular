import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameItemComponent } from './game-item/game-item.component';

const routes: Routes = [
  {path: '', component:GameItemComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GameRoutingModule { }
