import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameItemComponent } from './game-item/game-item.component';
import { GameRoutingModule } from './game-routing.module';
import { DiractiveModule } from 'src/app/shared/diractive/diractive.module';
import { PipModule } from 'src/app/shared/pip/pip.module';



@NgModule({
  declarations: [
    GameItemComponent,
  ],
  imports: [
    CommonModule,
    GameRoutingModule,
    DiractiveModule,
    PipModule
  ],

})
export class GameModule { }
