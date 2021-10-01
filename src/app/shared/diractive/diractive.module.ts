import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoxShadowDirective } from './box-shadow.directive';



@NgModule({
  declarations: [
    BoxShadowDirective
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    BoxShadowDirective,
    CommonModule
  ]
})
export class DiractiveModule { }
